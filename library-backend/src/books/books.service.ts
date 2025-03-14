import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) // Inject the Book repository
    private booksRepository: Repository<Book>,
  ) {}

  // Fetch all books from the database
  findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  // Add a new book to the database
  create(book: Book): Promise<Book> {
    return this.booksRepository.save(book);
  }
}
