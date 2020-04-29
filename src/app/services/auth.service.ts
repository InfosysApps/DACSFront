import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {map, retry, catchError} from 'rxjs/operators';
import { Urls } from '../constants/urls';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public Header : HttpHeaders;
  
  constructor(private _http:HttpClient) {
    this.Header = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
   }

  public LoginVerifyPostCall(data) : Observable<any> 
  {
    let urls : Urls = new Urls();
    let login_url : string = urls.AWS_URL + urls.LOGIN_URI;
    return this._http.post(login_url, data, {headers:this.Header})
      .pipe(
        retry(1),
        catchError(this.HandleError),
        map(response => {
          return response;
      }))
  }

    //Error Handling
    private HandleError(error) {
      let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);

        return throwError(errorMessage);
    }
}
