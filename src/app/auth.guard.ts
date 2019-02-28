import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (sessionStorage.getItem('sessionId')) {
        if (sessionStorage.getItem('sessionId') !== '') {
          return true;
        } else {
          // navigate to login page
          // this.router.navigate(['/login']);
          return false;
        }
      } else {
          // navigate to login page
          // this.router.navigate(['/login']);
          return false;
      }
  }
}
