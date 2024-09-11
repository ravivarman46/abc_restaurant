import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-staff-reservations',
  templateUrl: './staff-reservations.component.html',
  styleUrls: ['./staff-reservations.component.css']
})
export class StaffReservationsComponent implements OnInit {
  reservations: any[] = []; 
  selectedReservation: any = null; 
  message: string = ''; 

  name: string = ''; 
  email: string = ''; 
  phone: string = ''; 
  date: string = ''; 
  time: string = ''; 
  partySize: number = 1; 
  specialRequests: string = ''; 

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllReservations(); 
  }

 
  getAllReservations() {
    this.http.get('http://localhost:5000/reservations')
      .subscribe(
        (response: any) => {
          this.reservations = response;
        },
        (error) => {
          console.error('Error fetching reservations:', error);
        }
      );
  }

  
  editReservation(reservation: any) {
    this.selectedReservation = reservation;
    this.name = reservation.name;
    this.email = reservation.email;
    this.phone = reservation.phone;
    this.date = reservation.date;
    this.time = reservation.time;
    this.partySize = reservation.party_size;
    this.specialRequests = reservation.special_requests;
  }

  
  updateReservation() {
    const updatedReservationData = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      date: this.date,
      time: this.time,
      partySize: this.partySize,
      specialRequests: this.specialRequests
    };

    this.http.put(`http://localhost:5000/reservations/${this.selectedReservation.id}`, updatedReservationData)
      .subscribe(
        (response: any) => {
          this.message = 'Reservation updated successfully!';
          this.getAllReservations(); 
          this.clearForm(); 
        },
        (error) => {
          this.message = 'Error occurred while updating reservation.';
          console.error(error);
        }
      );
  }

  
  deleteReservation(reservationId: number) {
    this.http.delete(`http://localhost:5000/reservations/${reservationId}`)
      .subscribe(
        (response: any) => {
          this.message = 'Reservation deleted successfully!';
          this.getAllReservations(); 
        },
        (error) => {
          this.message = 'Error occurred while deleting reservation.';
          console.error(error);
        }
      );
  }

  
  clearForm() {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.date = '';
    this.time = '';
    this.partySize = 1;
    this.specialRequests = '';
    this.selectedReservation = null; 
  }
}
