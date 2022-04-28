import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map, Observable, take, throwError} from "rxjs";
import {User} from "./interfaces/user";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      take(1),
      map((list) => list as User[]),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(error:  HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'))
  }
}
