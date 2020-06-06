import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  searchBooks(keyword: string){
    if (keyword != null && keyword.trim() != "")
      this._router.navigateByUrl('/home/search/' + keyword);
  }

}
