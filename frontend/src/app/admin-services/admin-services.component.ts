import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-services',
  templateUrl: './admin-services.component.html',
  styleUrls: ['./admin-services.component.css']
})
export class AdminServicesComponent implements OnInit {
  services: any[] = [];
  selectedService: any = null;
  message: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllServices();
  }

  
  getAllServices() {
    this.http.get('http://localhost:5000/services')
      .subscribe(
        (response: any) => {
          this.services = response;
        },
        (error) => {
          console.error('Error fetching services:', error);
        }
      );
  }

  
  editService(service: any) {
    this.selectedService = { ...service };
  }


  addService(service: any) {
    this.http.post('http://localhost:5000/services', service)
      .subscribe(
        (response: any) => {
          this.message = 'Service added successfully!';
          this.getAllServices();
          this.clearSelection();
        },
        (error) => {
          console.error('Error adding service:', error);
        }
      );
  }

 
  updateService() {
    this.http.put(`http://localhost:5000/services/${this.selectedService.id}`, this.selectedService)
      .subscribe(
        (response: any) => {
          this.message = 'Service updated successfully!';
          this.getAllServices();
          this.clearSelection();
        },
        (error) => {
          console.error('Error updating service:', error);
        }
      );
  }

  
  deleteService(serviceId: number) {
    this.http.delete(`http://localhost:5000/services/${serviceId}`)
      .subscribe(
        (response: any) => {
          this.message = 'Service deleted successfully!';
          this.getAllServices();
        },
        (error) => {
          console.error('Error deleting service:', error);
        }
      );
  }

  
  clearSelection() {
    this.selectedService = null;
  }
}
