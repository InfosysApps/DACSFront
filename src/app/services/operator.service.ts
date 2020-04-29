import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Urls } from '../constants/urls';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  public httpHeaders : HttpHeaders;

  constructor(private http:HttpClient) { 
    this.httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
  }

  public getOperatorInfo() : Observable<any> {
    let urls : Urls = new Urls();
    let operator_id : string = "9273dd3d-3f8c-4c45-aaaa-f82fa8056c19";
    let operator_info_url : string = urls.AWS_URL + urls.OPERATOR_INFO_URI + operator_id;
    return this.http.get(operator_info_url, {headers : this.httpHeaders})
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
