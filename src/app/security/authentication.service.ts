import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from "../../environments/environment";
import {UserService} from "../services/user.service";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthenticationService {


  constructor(private http: HttpClient,
              private userService: UserService) {}

  login(username: string, password: string) {
    return this.http.post<any>( environment.API_BASE_PATH + '/token', {username, password})
      .pipe(map(response => {
        if (response && response.token) {
          localStorage.setItem('currentUser', JSON.stringify(response));
        }
        return response;
      }));
  }

  register(registerData) {
    return this.http.post<any>( environment.API_BASE_PATH + '/token/register', registerData)
      .pipe(map(res => {
        return res;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  getCurrentUserInfos(data){
    return this.userService.getByUsername(data.username);
  }
}
