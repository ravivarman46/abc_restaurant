import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: any): boolean {
    const userRole = this.authService.getUserRole();  // Get role from localStorage
    const expectedRole = route.data.role;

    if (userRole === expectedRole) {
      return true;
    } else {
      this.router.navigate(['/login']);  // Redirect to login if not authorized
      return false;
    }
  }
}