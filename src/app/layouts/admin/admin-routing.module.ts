import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {BookDetailsComponent} from "./components/book-details/book-details.component";
import {BookCategoryComponent} from "./components/book-category/book-category.component";
import {UserListComponent} from "./components/user-list/user-list.component";


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {path: 'book', component: BookCategoryComponent},
      {path: 'book/category/:id', component: BookCategoryComponent},
      {path: 'book/:id', component: BookDetailsComponent},
      {path: 'user', component: UserListComponent}
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
