import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  errorMessage!: string;

  constructor(private registerService: RegisterService, private router: Router) {}

  onRegister(form: NgForm): void {
    if (form.valid) {
      this.registerService.register(form.value).subscribe({
        next: (response) => {
          this.router.navigate(['/login']); 
        },
        error: (error) => {
          this.errorMessage = 'Error: ' + error.message;
        }
      });
    }
  }
}
