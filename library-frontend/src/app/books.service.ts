import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../environments/environment'; // Import the environment

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private apiUrl = `${environment.apiUrl}/books`; // Use the environment variable
  private bookAddedSubject = new Subject<void>(); // Subject to notify when a book is added

  constructor(private http: HttpClient) {}

  // Fetch all books
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  // Add a new book
  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }

  // Notify subscribers that a book has been added
  notifyBookAdded(): void {
    this.bookAddedSubject.next();
  }

  // Subscribe to book added events
  onBookAdded(): Observable<void> {
    return this.bookAddedSubject.asObservable();
  }
}