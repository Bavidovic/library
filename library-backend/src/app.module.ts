import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { Book } from './books/entities/book.entity'; // Import the Book entity

// Add this line to log the SQLite3 package
console.log('SQLite3 package:', require('sqlite3'));

@Module({
  imports: [
    // Configure TypeORM with SQLite
    TypeOrmModule.forRoot({
      type: 'sqlite', // Database type
      database: '/app/data/database.sqlite', // SQLite database file (will be created automatically)
      entities: [Book], // Add your entities here
      synchronize: true,
      logging: true, // Automatically create database schema (for development only)
    }),
    BooksModule, // Import the BooksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}