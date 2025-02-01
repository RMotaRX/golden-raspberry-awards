import "reflect-metadata";
import path from 'path';
import { AppDataSource } from './database';
import express from "express";
import { CsvLoader } from "./loaders/CsvLoader";
import producerRouter from "./routes/producers";

const app = express();
const PORT = process.env.PORT || 3000;

AppDataSource.initialize().then(async () => {
  console.log("Database connected");

  await CsvLoader.loadMoviesFromCSV(
    path.resolve(__dirname, '../movielist (6).csv')
  );

  app.use("/api", producerRouter);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => console.log("Error connecting to the database", error));

export default app;