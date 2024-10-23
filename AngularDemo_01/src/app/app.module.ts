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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { PasswordValidator } from './user/login/password-validator.component';
import { FilterComponent } from './filter/filter.component';
import { CartComponent } from './cart/cart.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PlantComponent } from './plant/plant.component';
import { FeaturedPlantsComponent } from './featured-plants/featured-plants.component';
import { DemoComponent } from './products/demo-component';
import {CardHoverComponent} from './CustomDirectives/card-hover.directive';
import { TextboxFocusDirectiveTsDirective } from './CustomDirectives/textbox-focus.directive';
import { PropertyDirective } from './CustomDirectives/cssproperty-bind.directive';
import { DisableElement } from './CustomDirectives/disable-element.directive';
import { BlogComponentComponent } from './blog/blog-component.component';
import { TemplateComponent } from './CustomDirectives/template-class.directive';
import { StyleComponent } from './CustomDirectives/template-style.directive';
import { FaqAccordianComponent } from './faq-accordian/faq-accordian.component';
import { UserComponent } from './user/user.component';
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
    UserFormComponent,
    LoginComponent,
    FilterComponent,
    CartComponent,
    PlantComponent,
    FeaturedPlantsComponent,
    DemoComponent,
    CardHoverComponent,
    TextboxFocusDirectiveTsDirective,
    PropertyDirective,
    DisableElement,
    BlogComponentComponent,
    TemplateComponent,
    StyleComponent,
    FaqAccordianComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
