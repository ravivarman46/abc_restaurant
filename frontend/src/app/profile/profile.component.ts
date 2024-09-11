import { Component } from '@angular/core';
import { ProfileService } from './profile.service'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';
  responseMessage: string = '';

  constructor(private profileService: ProfileService) {}

  saveProfile() {
    const profileData = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      address: this.address
    };

    this.profileService.saveProfile(profileData).subscribe((response: any) => {
      this.responseMessage = response.message;
    }, (error: any) => {
      this.responseMessage = 'An error occurred while saving your profile.';
    });
  }
}
