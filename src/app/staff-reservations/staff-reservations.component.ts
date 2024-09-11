import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-staff-reservations',
  templateUrl: './staff-reservations.component.html',
  styleUrls: ['./staff-reservations.component.css']
})
export class StaffReservationsComponent implements OnInit {
  reservations: any[] = []; // All reservations
  selectedReservation: any = null; // Selected reservation for editing
  message: string = ''; // Success/Error message

  name: string = ''; // Customer name
  email: string = ''; // Customer email
  phone: string = ''; // Customer phone
  date: string = ''; // Reservation date
  time: string = ''; // Reservation time
  partySize: number = 1; // Party size
  specialRequests: string = ''; // Special requests

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllReservations(); // Fetch reservations when the component loads
  }

  // Fetch all reservations
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

  // Select a reservation for editing
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

  // Update a reservation
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
          this.getAllReservations(); // Refresh the reservations list
          this.clearForm(); // Clear the form after success
        },
        (error) => {
          this.message = 'Error occurred while updating reservation.';
          console.error(error);
        }
      );
  }

  // Delete a reservation
  deleteReservation(reservationId: number) {
    this.http.delete(`http://localhost:5000/reservations/${reservationId}`)
      .subscribe(
        (response: any) => {
          this.message = 'Reservation deleted successfully!';
          this.getAllReservations(); // Refresh the reservations list
        },
        (error) => {
          this.message = 'Error occurred while deleting reservation.';
          console.error(error);
        }
      );
  }

  // Clear the form and reset the selection
  clearForm() {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.date = '';
    this.time = '';
    this.partySize = 1;
    this.specialRequests = '';
    this.selectedReservation = null; // Clear the selection
  }
}
