import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ABC Restaurant';
  // userRole: string | null = null;

  // constructor(private authService: AuthService, private router: Router) {
  //   this.userRole = this.authService.getUserRole(); 
  // }

 
  // isLoggedIn(): boolean {
  //   return this.userRole !== null;
  // }

  
  // isAdmin(): boolean {
  //   return this.userRole === 'admin';
  // }

 
  // isStaff(): boolean {
  //   return this.userRole === 'staff';
  // }

  
  // isCustomer(): boolean {
  //   return this.userRole === 'customer';
  // }

  
  // logout() {
  //   this.authService.logout();  
  //   this.router.navigate(['/login']);  
  // }
}
