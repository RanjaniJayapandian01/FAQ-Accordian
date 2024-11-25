import { InjectionToken, NgModule } from '@angular/core';
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
import { RouterModule, Routes } from '@angular/router';
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
import { AdminComponent } from './user/admin/admin.component';
import { UserService } from './Services/user.service';
import { LoggerService } from './Services/logger.service';
import { NewTaskComponent } from './products/new-task.component';
import { ShowTaskComponent } from './products/show-task.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './exercise/notfound.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { PlantService } from './Services/plant.service';
import { PurchaseComponent } from './cart/purchase.component';
import { ToastComponent } from './exercise/toast.component';
import { HomeComponent } from './home/home.component';
import { TestimomialComponent } from './home/testimonial.component';
import { ContactComponent } from './home/contact.component';
import { AuthenticationService } from './Services/auth.service';
import { NavigateGuard } from './Services/navigate-guard.service';

export const USER_TOKEN= new InjectionToken<UserService>('USER_SERVICE');
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
    UserComponent,
    AdminComponent,
    NewTaskComponent,
    ShowTaskComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    PurchaseComponent,
    ToastComponent,
    HomeComponent,
    TestimomialComponent,
    ContactComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: 'USER_TOKEN', useClass: UserService},
 //   {provide: 'IDataService', useClass: PlantService},
    LoggerService,
   PlantService,
    AuthenticationService,
   NavigateGuard,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
