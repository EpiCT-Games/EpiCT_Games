import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ShowCartComponent } from './show-cart/show-cart.component';
import { ShowEventComponent } from './show-event/show-event.component';
import { ShowProductComponent } from './show-product/show-product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ShowProductComponent },
  { path: 'event', component: ShowEventComponent },
  { path: 'cart', component: ShowCartComponent },
  { path: 'register', component: RegisterComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },   /* Default routing to HomeComponent */
  //{ path: '**' , component: PageNotFoundComponent }         /* 404 not found will be redirected to PageNotFoundComponent */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
