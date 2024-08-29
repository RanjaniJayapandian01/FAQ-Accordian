import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { BooksComponent } from './books/books.component';
import { EformComponent } from './eform/eform.component';
import { StarComponent } from './star/star.component';
import { StarFillComponent } from './star/starfill.component';
import { RatingComponent } from './star/rating.component';
import { ArticleComponent } from './products/article.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { TruncatePipe } from './truncate.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    BooksComponent,
    EformComponent,
    StarComponent,
    StarFillComponent,
    RatingComponent,
    ArticleComponent,
    ExerciseComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
