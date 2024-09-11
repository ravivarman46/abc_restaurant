import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-reservation',
  templateUrl: './admin-reservation.component.html',
  styleUrls: ['./admin-reservation.component.css']
})
export class AdminReservationComponent implements OnInit {
  reservations: any[] = [];          // Array to hold all reservations
  selectedReservation: any = null;   // Hold the selected reservation for editing
  message: string = '';              // Message for success or error display

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllReservations();  // Fetch all reservations when the component is initialized
  }

  // Fetch all reservations from the backend
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
    this.selectedReservation = { ...reservation };  // Make a copy of the selected reservation
  }

  // Update an existing reservation
  updateReservation() {
    this.http.put(`http://localhost:5000/reservations/${this.selectedReservation.id}`, this.selectedReservation)
      .subscribe(
        (response: any) => {
          this.message = 'Reservation updated successfully!';
          this.getAllReservations();  // Refresh reservations list
          this.clearSelection();      // Clear selection after update
        },
        (error) => {
          console.error('Error updating reservation:', error);
        }
      );
  }

  // Delete a reservation
  deleteReservation(reservationId: number) {
    this.http.delete(`http://localhost:5000/reservations/${reservationId}`)
      .subscribe(
        (response: any) => {
          this.message = 'Reservation deleted successfully!';
          this.getAllReservations();  // Refresh reservations list
        },
        (error) => {
          console.error('Error deleting reservation:', error);
        }
      );
  }

  // Clear the form and deselect reservation
  clearSelection() {
    this.selectedReservation = null;  // Deselect the reservation
  }
}
