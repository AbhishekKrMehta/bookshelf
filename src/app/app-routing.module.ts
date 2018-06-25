import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Routes = [
  { path:'books', component:BooksComponent},
  { path:'book/:isbn', component:BookDetailsComponent},
  { path: '',   redirectTo: '/books', pathMatch: 'full' },
  { path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
