import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000';  // Adjust the URL as per your backend API

  constructor(private http: HttpClient) {}

  // Register method
  register(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { email, password });
  }

  // Login method
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  // Store user role in localStorage after login
  setUserRole(role: string): void {
    localStorage.setItem('userRole', role);
  }

  // Retrieve user role from localStorage
  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return this.getUserRole() !== null;
  }

  // Check if user is Admin
  isAdmin(): boolean {
    return this.getUserRole() === 'admin';
  }

  // Check if user is Staff
  isStaff(): boolean {
    return this.getUserRole() === 'staff';
  }

  // Check if user is Customer
  isCustomer(): boolean {
    return this.getUserRole() === 'customer';
  }

  // Logout and clear localStorage
  logout(): void {
    localStorage.removeItem('userRole');
  }
}
