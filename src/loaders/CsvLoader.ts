import { createReadStream } from "fs";
import csv from 'csv-parser';
import { AppDataSource } from "../database";
import { Movie } from "../entities/Movie";
import { Producer } from "../entities/Producer";

export class CsvLoader {
  static async loadMoviesFromCSV(filePath: string): Promise<void> {
    const movieRepository = AppDataSource.getRepository(Movie);
    const producerRepository = AppDataSource.getRepository(Producer);

    const rows: any[] = [];

    createReadStream(filePath)
      .pipe(csv({ separator: ';' }))
      .on('data', (row) => {
        rows.push(row);
      })
      .on('end', async () => {
        for (const row of rows) {
          const winner = row.winner?.toLowerCase() === 'yes';
          const movie = movieRepository.create({
            year: parseInt(row.year),
            title: row.title,
            studios: row.studios,
            winner,
          });

          const producers = row.producers
            .split(/, | and /i)
            .map((name: string) => name.trim());
          movie.producers = await Promise.all(
            producers.map(async (name: string) => {
              let producer = await producerRepository.findOne({ where: { name } });
              if (!producer) {
                producer = producerRepository.create({ name });
                await producerRepository.save(producer);
              }
              return producer;
            })
          );

          await movieRepository.save(movie);
        }
        console.log('CSV carregado com sucesso.');
      });
  }
}