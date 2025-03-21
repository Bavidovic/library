import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
export declare class BooksService {
    private booksRepository;
    constructor(booksRepository: Repository<Book>);
    findAll(): Promise<Book[]>;
    create(book: Book): Promise<Book>;
}
