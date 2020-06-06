import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {BookListComponent} from "./components/home/book-list/book-list.component";
import {BookDetailsComponent} from "./components/book/book-details/book-details.component";
import {CartDetailsComponent} from "./components/cart-details/cart-details.component";
import {HttpClientModule} from "@angular/common/http";
import {CategoryComponent} from "./components/shared/category/category.component";
import {SearchComponent} from "./components/navbar/search/search.component";
import {CartStatusComponent} from "./components/shared/cart-status/cart-status.component";
import {UserRoutingModule} from "./user-routing.module";
import {BookService} from "../../services/book.service";
import {CategoryService} from "../../services/category.service";
import {ApiService} from "../../services/api.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { NavbarComponent } from './components/navbar/navbar.component';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/book/book.component';


@NgModule({
  declarations: [
    UserComponent,
    BookListComponent,
    CategoryComponent,
    SearchComponent,
    BookDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    NavbarComponent,
    HomeComponent,
    BookComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  exports: [
    SearchComponent,
    UserComponent
  ],
  providers: [
    BookService,
    CategoryService,
    ApiService
  ]
})
export class UserModule { }
