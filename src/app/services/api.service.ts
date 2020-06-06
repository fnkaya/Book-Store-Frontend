import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  get(path: string, params: HttpParams): Observable<any>{
    return this.http.get(environment.API_BASE_PATH + path, {params}).pipe(
      catchError(ApiService.formatError)
    );
  }

  post(path: string, params: HttpParams): Observable<any>{
    return this.http.post(environment.API_BASE_PATH + path, JSON.stringify(params), this.httpOptions).pipe(
      catchError(ApiService.formatError)
    );
  }

  put(path: string, params: HttpParams): Observable<any>{
    return this.http.put(environment.API_BASE_PATH + path, JSON.stringify(params), this.httpOptions).pipe(
      catchError(ApiService.formatError)
    );
  }

  delete(path: string, params: HttpParams): Observable<any>{
    return this.http.delete(environment.API_BASE_PATH + path, {params}).pipe(
      catchError(ApiService.formatError)
    );
  }

  private static formatError(error: any){
    return Observable.apply(error.error);
  }
}
