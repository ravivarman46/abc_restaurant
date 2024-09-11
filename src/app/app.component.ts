import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ABC Restaurant';
  userRole: string | null = null;

  constructor(private authService: AuthService, private router: Router) {
    this.userRole = this.authService.getUserRole(); // Get the current user role
  }

  // Method to check if a user is logged in
  isLoggedIn(): boolean {
    return this.userRole !== null;
  }

  // Method to check if the user is an Admin
  isAdmin(): boolean {
    return this.userRole === 'admin';
  }

  // Method to check if the user is a Staff member
  isStaff(): boolean {
    return this.userRole === 'staff';
  }

  // Method to check if the user is a Customer
  isCustomer(): boolean {
    return this.userRole === 'customer';
  }

  // Logout functionality
  logout() {
    this.authService.logout();  // Clear user session
    this.router.navigate(['/login']);  // Navigate to login page
  }
}
