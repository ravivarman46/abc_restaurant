import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class SignupService {
      private apiUrl = 'http://localhost:5000/signup'; // Update the URL to your backend API
  
      constructor(private http: HttpClient) { }
    
      signup(user: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, user);
      }
    }

