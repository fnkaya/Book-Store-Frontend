import {Component, OnInit} from '@angular/core';
import {Category} from "../../../../models/category";
import {CategoryService} from "../../../../services/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../../../../services/book.service";
import {Book} from "../../../../models/book";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  categories: Category[] = [];
  currentCategory: Category = null;
  bookId: number = null;
  book: Book = null;
  bookForm: FormGroup;

  constructor(private _bookService: BookService,
              private _categoryService: CategoryService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router,
              private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getCategories();
    this._activatedRoute.params.subscribe(params => {
        this.bookId = +params['id'];
        this.getBookDetails();
      }
    )
  }

  private getCategories(){
    this._categoryService.getAll().subscribe(data => {
        this.categories = data;
      }
    );
  }

  private getBookDetails() {
    this._bookService.getBook(this.bookId).subscribe( response => {
        this.bookForm = this.initForm(response);
      }
    );
  }

  initForm(response){
    this.currentCategory = response.category.name;
    return this.bookForm = this._formBuilder.group({
      'id': response['id'],
      'name': response['name'],
      'author': response['author'],
      'description': response['description'],
      'imageUrl': response['imageUrl'],
      'unitPrice': response['unitPrice'],
      'unitsInStock': response['unitsInStock'],
      'category': response['category']
    });
  }

  get formControls() {return this.bookForm.controls}

  saveBook() {
    this._bookService.update(this.bookForm.value).subscribe(() => {
      this._router.navigateByUrl('/admin');
    });
  }
}

