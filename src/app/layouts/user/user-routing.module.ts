import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./user.component";
import {CartDetailsComponent} from "./components/cart-details/cart-details.component";
import {HomeComponent} from "./components/home/home.component";
import {BookComponent} from "./components/book/book.component";
import {AuthGuard} from "../../security/auth.guard";


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'category/:id', component: HomeComponent},
      {path: 'search/:keyword', component: HomeComponent},
      {path: 'book/:id', component: BookComponent},
      {path: 'cart', component: CartDetailsComponent, canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
