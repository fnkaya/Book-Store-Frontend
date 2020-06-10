import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../../security/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'Book Store';
  token = '';
  currentUser = {};

  constructor(private _authenticationService: AuthenticationService,
              private _router: Router) { }

  ngOnInit(): void {
    const temp = localStorage.getItem('currentUser');
    this.token = JSON.parse(temp);
    if (this.token != null)
      this.getCurrentUserInfos(this.token);
  }

  private getCurrentUserInfos(token) {
      this._authenticationService.getCurrentUserInfos(token).subscribe(resp => {
        this.currentUser = resp;
      })
  }

  handleLogoutSignin() {
    if (this.token == null)
      this._router.navigateByUrl("/login");
    else
      this.logout();
  }

  logout() {
    this._authenticationService.logout();
    location.reload(true);
  }
}
