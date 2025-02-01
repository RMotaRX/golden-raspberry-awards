import { AppDataSource } from '../database';
import { Producer } from '../entities/Producer';

interface IntervalResult {
  producer: string;
  interval: number;
  previousWin: number;
  followingWin: number;
}

export class ProducerService {
  static async getWinningProducers(): Promise<{
    min: IntervalResult[];
    max: IntervalResult[];
  }> {
    const producerRepository = AppDataSource.getRepository(Producer);
    const producers = await producerRepository.find({
      relations: ['movies'],
    });

    const intervals: IntervalResult[] = [];

    for (const producer of producers) {
      const winningMovies = producer.movies
        .filter((movie) => movie.winner)
        .sort((a, b) => a.year - b.year);

      for (let i = 1; i < winningMovies.length; i++) {
        const previousWin = winningMovies[i - 1].year;
        const followingWin = winningMovies[i].year;
        intervals.push({
          producer: producer.name,
          interval: followingWin - previousWin,
          previousWin,
          followingWin,
        });
      }
    }

    const sortedIntervals = intervals.sort((a, b) => a.interval - b.interval);
    const minInterval = sortedIntervals[0]?.interval;
    const maxInterval = sortedIntervals[sortedIntervals.length - 1]?.interval;

    return {
      min: sortedIntervals.filter((i) => i.interval === minInterval),
      max: sortedIntervals.filter((i) => i.interval === maxInterval),
    };
  }
}