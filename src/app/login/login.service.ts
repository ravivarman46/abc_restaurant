// src/app/login.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:5000/login'; // Adjust if needed

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}