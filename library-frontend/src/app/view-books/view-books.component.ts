// view-books.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService, Book } from '../books.service';

@Component({
  selector: 'app-view-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css'],
})
export class ViewBooksComponent implements OnInit {
  books: Book[] = []; // Initialize an empty array to store books

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.fetchBooks(); // Fetch books when the component initializes

    // Subscribe to book added events
    this.booksService.onBookAdded().subscribe(() => {
      this.fetchBooks(); // Refresh the book list when a new book is added
    });
  }

  // Fetch books from the backend
  fetchBooks(): void {
    this.booksService.getBooks().subscribe({
      next: (books) => {
        this.books = books; // Update the books array with the fetched data
      },
      error: (error) => {
        console.error('Error fetching books:', error);
      },
    });
  }
}
