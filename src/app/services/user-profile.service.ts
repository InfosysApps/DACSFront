import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {map, retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  public Header : HttpHeaders;

  constructor(private _http:HttpClient) {
    this.Header = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
   }

  public UserRegistrationPhaseI(data : any) : Observable<any> 
    {
      return this._http.post('http://localhost:51542/api/user/registration', data, {headers:this.Header})
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
