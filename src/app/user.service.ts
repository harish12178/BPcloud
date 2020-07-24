import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private server_address = "http://localhost:5000/api/Auth";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }

getAllUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.server_address)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  createUser(user: any): Observable<any> {
    return this.httpClient.post<any>(this.server_address, JSON.stringify(user),this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  deleteUser(id:any): Observable<any> {
    return this.httpClient.delete<any>(this.server_address+"/"+id)
    .pipe(
      catchError(this.errorHandler)
    )
  }  

errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
