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

// const routes: Routes = [];
const routes: Routes=[
  {path: '', component: ExerciseComponent},
  {path: 'home', component: ExerciseComponent},
  {path: 'plants', component: PlantComponent},
  {path: 'form', component: UserFormComponent},
  {path: 'blog', component: BlogComponentComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'user', component: UserComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', component: NotFoundComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
