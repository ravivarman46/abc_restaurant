import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-submit-query',
  templateUrl:'./submit-query.component.html',
  styleUrls: ['./submit-query.component.css']
})
export class SubmitQueryComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';
  responseMessage: string = '';

  constructor(private http: HttpClient) {}

 
  submitQuery() {
    const queryData = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      message: this.message
    };

    this.http.post('http://localhost:5000/submit-query', queryData)
      .subscribe(
        (response: any) => {
          this.responseMessage = 'Query submitted successfully!';
          this.resetForm();
        },
        (error) => {
          this.responseMessage = 'Error occurred while submitting the query.';
          console.error(error);
        }
      );
  }

  
  resetForm() {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.message = '';
  }
}
