// add-book.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksService, Book } from '../books.service';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent {
  book: Book = {
    id: 0,
    title: '',
    author: '',
    description: '',
  };

  constructor(private booksService: BooksService) {}

  onSubmit(): void {
    this.booksService.addBook(this.book).subscribe({
      next: (response) => {
        console.log('Book added successfully:', response);
        alert('Book added successfully!');
        this.resetForm();
        this.booksService.notifyBookAdded(); // Notify that a book has been added
      },
      error: (error) => {
        console.error('Error adding book:', error);
        alert('Failed to add book. Please try again.');
      },
    });
  }

  resetForm(): void {
    this.book = {
      id: 0,
      title: '',
      author: '',
      description: '',
    };
  }
}
