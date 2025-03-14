// app.routes.ts
import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { AddBookComponent } from './add-book/add-book.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'books', component: ViewBooksComponent },
  { path: 'add-book', component: AddBookComponent },
];