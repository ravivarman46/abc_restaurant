import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000';  

  constructor(private http: HttpClient) {}

  
  register(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { email, password });
  }

 
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  
  setUserRole(role: string): void {
    localStorage.setItem('userRole', role);
  }

  
  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }

  
  isLoggedIn(): boolean {
    return this.getUserRole() !== null;
  }

 
  isAdmin(): boolean {
    return this.getUserRole() === 'admin';
  }

 
  isStaff(): boolean {
    return this.getUserRole() === 'staff';
  }

  
  isCustomer(): boolean {
    return this.getUserRole() === 'customer';
  }

  
  logout(): void {
    localStorage.removeItem('userRole');
  }
}
