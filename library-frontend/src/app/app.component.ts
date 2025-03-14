// app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HttpClientModule], // Add HttpClientModule here
  template: `
    <nav>
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/books">View Books</a></li>
        <li><a routerLink="/add-book">Add Book</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'library-frontend';
}