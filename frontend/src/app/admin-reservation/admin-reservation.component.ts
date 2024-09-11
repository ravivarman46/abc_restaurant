import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-reservation',
  templateUrl: './admin-reservation.component.html',
  styleUrls: ['./admin-reservation.component.css']
})
export class AdminReservationComponent implements OnInit {
  reservations: any[] = [];          
  selectedReservation: any = null;   
  message: string = '';              

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
    this.selectedReservation = { ...reservation };  
  }

 
  updateReservation() {
    this.http.put(`http://localhost:5000/reservations/${this.selectedReservation.id}`, this.selectedReservation)
      .subscribe(
        (response: any) => {
          this.message = 'Reservation updated successfully!';
          this.getAllReservations();  
          this.clearSelection();      
        },
        (error) => {
          console.error('Error updating reservation:', error);
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
          console.error('Error deleting reservation:', error);
        }
      );
  }

  
  clearSelection() {
    this.selectedReservation = null;  
  }
}
