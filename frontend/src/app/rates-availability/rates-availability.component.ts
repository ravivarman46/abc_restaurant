import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rates-availability',
  templateUrl: './rates-availability.component.html',
  styleUrls: ['./rates-availability.component.css']
})
export class RatesAvailabilityComponent {
  reservationDate: string = '';
  reservationTime: string = '';
  guests: number = 1;
  availability: any = null;
  checked: boolean = false;

  constructor(private http: HttpClient) {}

  checkAvailability() {
    const queryParams = {
      date: this.reservationDate,
      time: this.reservationTime,
      guests: this.guests
    };

    this.http.get('/api/check-availability', { params: queryParams })
      .subscribe((response: any) => {
        this.availability = response.slots;
        this.checked = true;
      }, error => {
        console.error('Error fetching availability:', error);
        this.availability = null;
        this.checked = true;
      });
  }
}
