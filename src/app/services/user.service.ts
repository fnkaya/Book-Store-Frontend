import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private USER_PATH = "/user";



  constructor(private httpClient: HttpClient,
              private _apiService: ApiService) { }



  getAll(page): Observable<any>{
    return this._apiService.get(this.USER_PATH, page).pipe(map(response => {
          if (response) return response;
          else {
            console.log(response)
            return ;
          }
        }
      )
    );
  }

  getById(id): Observable<any>{
    return this._apiService.get(this.USER_PATH +'/'+ id, null).pipe(map(response => {
          if (response) return response;
          else {
            console.log(response)
            return ;
          }
        }
      )
    );
  }

  getByUsername(username): Observable<any>{
    return this._apiService.get(this.USER_PATH +'/search?username='+ username, null).pipe(map(response => {
        if (response) return response;
        else {
          console.log(response)
          return ;
        }
      }
      )
    );
  }

  create(user): Observable<any>{
    return this._apiService.post(this.USER_PATH, user).pipe(map(response => {
          if (response) return response;
          else {
            console.log(response)
            return ;
          }
        }
      )
    );
  }

  delete(id): Observable<any>{
    return this._apiService.delete(this.USER_PATH, id).pipe(map(response => {
          if (response) return response;
          else {
            console.log(response)
            return ;
          }
        }
      )
    );
  }
}
