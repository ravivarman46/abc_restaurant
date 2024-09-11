import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  errorMessage!: string;

  constructor(private signupService: SignupService) { }

  onSignup(form: NgForm): void {
    if (form.valid) {
      this.signupService.signup(form.value).subscribe({
        next: (response) => {
          alert('Signup successful');
          form.reset();
        },
        error: (error) => {
          this.errorMessage = 'Error: ' + error.message;
        }
      });
    }
  }
}

