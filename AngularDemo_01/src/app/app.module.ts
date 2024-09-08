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
import { JumbotronComponent } from './products/bs-jumbotron.component';
import { UserFormComponent } from './products/user-form.component';
import { FormsModule } from '@angular/forms';

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
    TruncatePipe,
    JumbotronComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
