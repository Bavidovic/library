import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // Marks this class as a TypeORM entity
export class Book {
  @PrimaryGeneratedColumn() // Auto-generates the ID
  id: number;

  @Column() // Maps to a database column
  title: string;

  @Column() // Maps to a database column
  author: string;

  @Column() // Maps to a database column
  description: string;
}
