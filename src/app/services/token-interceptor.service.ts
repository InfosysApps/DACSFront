import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import { SessionHelperService } from './session-helper.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _Injector:Injector) { }

  //Http Interceptor for Bearer token in api request.
  intercept(req, next){
    let sessionHelper = this._Injector.get(SessionHelperService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer '+sessionHelper.GetSessionStorage(sessionHelper.TokenKey)
      }
    })
    return next.handle(tokenizedReq)
  }
}
