import { DataSource } from 'typeorm';
import { Movie } from './entities/Movie';
import { Producer } from './entities/Producer';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: ':memory:',
  entities: [Movie, Producer],
  synchronize: true,
  logging: false,
});