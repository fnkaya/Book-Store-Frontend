import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {RouterModule} from "@angular/router";
import {AdminRoutingModule} from "./admin-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {BookService} from "../../services/book.service";
import {CategoryService} from "../../services/category.service";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {BookComponent} from './components/book-category/book/book.component';
import {ApiService} from "../../services/api.service";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {BsModalService, ModalModule} from "ngx-bootstrap/modal";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CategoryComponent} from './components/book-category/category/category.component';
import {BookDetailsComponent} from './components/book-details/book-details.component';
import {BookCategoryComponent} from './components/book-category/book-category.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { UserListComponent } from './components/user-list/user-list.component';
import {UserService} from "../../services/user.service";


@NgModule({
  declarations: [
    AdminComponent,
    NavbarComponent,
    BookComponent,
    CategoryComponent,
    BookDetailsComponent,
    BookCategoryComponent,
    SidebarComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    NgxDatatableModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    MatSidenavModule,
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [
    BookService,
    CategoryService,
    UserService,
    ApiService,
    BsModalService
  ]
})
export class AdminModule { }
