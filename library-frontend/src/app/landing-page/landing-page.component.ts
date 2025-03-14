// landing-page.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-landing-page',
  standalone: true, // Mark as standalone
  imports: [CommonModule], // Import CommonModule here
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  books = [
    { id: 1, title: 'Book 1', author: 'Author 1', description: 'Description 1' },
    { id: 2, title: 'Book 2', author: 'Author 2', description: 'Description 2' },
  ];
}