import { Component, OnInit } from '@angular/core';
import {Book} from "../../../../models/book";
import {UserService} from "../../../../services/user.service";
import {Page} from "../../../../models/page";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  books: Book[] = [];
  page = new Page();

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.setPage({offset: 0});
  }

  setPage(pageInfo){
    this.page.page = pageInfo.offset;
    this._userService.getAll(this.page).subscribe( data => {
      this.page.size = data.size;
      this.page.page = data.page;
      this.page.totalElements = data.totalElements;
      this.books = data.content;
    })
  }

}
