import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Producer } from "./Producer";

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  year: number;

  @Column()
  title: string;

  @Column()
  studios: string;

  @ManyToMany(() => Producer, producer => producer.movies, { cascade: true })
  @JoinTable()
  producers: Producer[];

  @Column()
  winner: boolean;
}