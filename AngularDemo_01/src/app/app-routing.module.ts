import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseComponent } from './exercise/exercise.component';
import { UserFormComponent } from './products/user-form.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './user/admin/admin.component';
import { NotFoundComponent } from './exercise/notfound.component';
import { BlogComponentComponent } from './blog/blog-component.component';
import { UserComponent } from './user/user.component';
import { PlantComponent } from './plant/plant.component';
import { PurchaseComponent } from './cart/purchase.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { CanActivateKey, CanActivateSubKey } from './Services/auth.guard';
import { AuthenticationService } from './Services/auth.service';
import { NavigateGuard } from './Services/navigate-guard.service';

// const routes: Routes = [];
const routes: Routes=[
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'plants', component: ExerciseComponent},
  {path: 'plants', children: [
  {path: ':id', component: PlantComponent}
  ]},
  {path: 'form', component: UserFormComponent},
  {path: 'blog', component: BlogComponentComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'user',component: UserComponent, canDeactivate:[NavigateGuard]},
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LoginComponent,  canDeactivate:[NavigateGuard]},
    // Define paths with dynamic route parameters
    // { path: 'checkout/:transactionId', component: PurchaseComponent },
  {path: 'order', component: PurchaseComponent , canActivate: [CanActivateKey]} ,
  {path: 'order',  component: PurchaseComponent , canActivate: [CanActivateKey], canActivateChild:[CanActivateSubKey], children:[
  { path: 'product-summary/:transactionId', component: PurchaseComponent },
  { path: 'delivery-address/:transactionId', component: PurchaseComponent },
  { path: 'payment/:transactionId', component: PurchaseComponent }]},    
  // {path: 'check-out/:transactionId', component: PurchaseComponent},
  // { path: 'order', component: PurchaseComponent },
  // { path: 'address', component: PurchaseComponent },
  // { path: 'review', component: PurchaseComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },  // Default route
  {path: '**', component: NotFoundComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
