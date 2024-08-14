import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { BooksComponent } from './books/books.component';
import { EformComponent } from './eform/eform.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    BooksComponent,
    EformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
