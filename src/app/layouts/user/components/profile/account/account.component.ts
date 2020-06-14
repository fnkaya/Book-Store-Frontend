import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private _userService: UserService,
              private _formBuilder: FormBuilder,
              private _router: Router) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

  private getUserProfile() {
    const token = JSON.parse(localStorage.getItem('currentUser'));
    if (token != null){
      this._userService.getByUsername(token['username']).subscribe(response =>
        this.profileForm = this.initForm(response)
      );
    }
  }

  initForm(response){
    return this.profileForm = this._formBuilder.group({
      'id': response['id'],
      'name': response['name'],
      'username': response['username'],
      'email': response['email'],
      'phoneNumber': response['phoneNumber'],
      'address': response['address'],
      'city': response['city'],
      'state': response['state'],
      'zipcode': response['zipcode']
    });
  }

  saveProfile() {
    this._userService.update(this.profileForm.value).subscribe(() => {
      this.getUserProfile();
    });
  }
}
