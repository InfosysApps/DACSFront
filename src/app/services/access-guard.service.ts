import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SessionHelperService } from './session-helper.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuardService implements CanActivate {

  constructor(private router: Router, private sessionHelperService : SessionHelperService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    let token : string;
    token = localStorage.getItem('isLoggedIn');
    if(!token) {
      this.router.navigate(['/Login']);
      return false;
    }
    return true;
  }
}
