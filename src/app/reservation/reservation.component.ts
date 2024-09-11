import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  name: string = '';             // Customer Name
  email: string = '';            // Customer Email
  phone: string = '';            // Customer Phone
  date: string = '';             // Reservation Date
  time: string = '';             // Reservation Time
  partySize: number = 1;         // Party Size
  specialRequests: string = '';  // Special Requests
  message: string = '';          // Success/Error Message

  reservations: any[] = [];      // All reservations
  selectedReservation: any = null;  // Reservation selected for editing

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllReservations();  // Fetch reservations on component load
  }

  // Method to handle new reservation submission
  makeReservation() {
    const reservationData = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      date: this.date,
      time: this.time,
      partySize: this.partySize,
      specialRequests: this.specialRequests,
      userId: 1 // Assuming a logged-in user with id=1
    };

    if (this.selectedReservation) {
      this.updateReservation();  // Update existing reservation
    } else {
      this.http.post('http://localhost:5000/reserve', reservationData)
        .subscribe(
          (response: any) => {
            this.message = 'Reservation successful!';
            this.getAllReservations(); // Refresh reservations
            this.clearForm();  // Clear form after success
          },
          (error) => {
            this.message = 'Error occurred while making reservation.';
            console.error(error);
          }
        );
    }
  }

  // Method to fetch all reservations
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

  // Method to select a reservation for editing
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

  // Method to update an existing reservation
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
          this.getAllReservations(); // Refresh reservations
          this.clearForm();  // Clear form after success
        },
        (error) => {
          this.message = 'Error occurred while updating reservation.';
          console.error(error);
        }
      );
  }

  // Method to delete a reservation
  deleteReservation(reservationId: number) {
    this.http.delete(`http://localhost:5000/reservations/${reservationId}`)
      .subscribe(
        (response: any) => {
          this.message = 'Reservation deleted successfully!';
          this.getAllReservations(); // Refresh reservations
        },
        (error) => {
          this.message = 'Error occurred while deleting reservation.';
          console.error(error);
        }
      );
  }

  // Clear the form and selection
  clearForm() {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.date = '';
    this.time = '';
    this.partySize = 1;
    this.specialRequests = '';
    this.selectedReservation = null;  // Clear selection
  }
}
