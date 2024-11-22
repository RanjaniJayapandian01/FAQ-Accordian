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

// const routes: Routes = [];
const routes: Routes=[
  {path: '', component: ExerciseComponent},
  {path: 'home', component: ExerciseComponent},
  {path: 'plants/:id', component: PlantComponent},
  {path: 'plants', component: ExerciseComponent},
  {path: 'form', component: UserFormComponent},
  {path: 'blog', component: BlogComponentComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'user', component: UserComponent},
  {path: 'cart', component: CartComponent},

    // Define paths with dynamic route parameters
    // { path: 'checkout/:transactionId', component: PurchaseComponent },
    { path: 'order/:transactionId', component: PurchaseComponent },
    { path: 'address/:transactionId', component: PurchaseComponent },
    { path: 'review/:transactionId', component: PurchaseComponent },
  
  
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
