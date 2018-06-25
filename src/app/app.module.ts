import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from './angular-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { RemoveUnderscorePipe } from './remove-underscore.pipe';





@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    FooterComponent,
    SearchComponent,
    PageNotFoundComponent,
    BookDetailsComponent,
    RemoveUnderscorePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    AppRoutingModule
  ],
  entryComponents: [
    SearchComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
