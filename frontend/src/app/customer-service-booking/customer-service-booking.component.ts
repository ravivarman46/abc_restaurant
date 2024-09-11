import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-service-booking',
  templateUrl: './customer-service-booking.component.html',
  styleUrls: ['./customer-service-booking.component.css']
})
export class CustomerServiceBookingComponent implements OnInit {
  selectedService: any;
  serviceId: number | undefined;
  customerServices = [
    { title: 'Concierge Service', description: 'Our dedicated concierge is here to assist you 24/7.', id: 1 },
    { title: 'Help & Support', description: 'Reach out for any assistance you need during your stay.', id: 2 },
    { title: 'Bellhop Service', description: 'We provide efficient luggage assistance.', id: 3 },
    { title: 'Group Dining', description: 'Perfect for family meals or corporate events.', id: 4 },
    { title: '24/7 Helpline', description: 'Get help anytime with our 24/7 service line.', id: 5 },
    { title: 'Taxi Service', description: 'Book taxis directly through our app.', id: 6 },
    { title: 'Gourmet Meals', description: 'Experience the finest cuisine.', id: 7 },
    { title: 'Wine & Dine', description: 'Enjoy fine wines with a fantastic meal.', id: 8 },
    { title: 'Quick Bites', description: 'Grab delicious snacks on the go.', id: 9 },
    { title: 'Cocktail Bar', description: 'Relax with custom-made cocktails.', id: 10 },
    { title: 'Birthday Catering', description: 'We cater special birthday celebrations.', id: 11 },
    { title: 'Coffee & Tea', description: 'Enjoy a variety of premium coffees and teas.', id: 12 },
    { title: 'WiFi Access', description: 'Stay connected with our high-speed internet.', id: 13 },
    { title: 'Tour Guide', description: 'Explore the city with our expert guides.', id: 14 },
    { title: 'Event Planning', description: 'We help plan your special events.', id: 15 },
    { title: 'Live Music', description: 'Enjoy live music performances.', id: 16 },
    { title: 'Photography', description: 'Capture your memories with our photography services.', id: 17 },
    { title: 'Online Shopping', description: 'Order products directly from our online store.', id: 18 },
    { title: 'Phone Services', description: 'Stay connected with our local and international calling plans.', id: 19 },
    { title: 'Luggage Assistance', description: 'We take care of your baggage with ease.', id: 20 }
  ];

  name: string = '';
  email: string = '';
  phone: string = '';
  date: string = '';
  time: string = '';
  responseMessage: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    // Get service id from the route parameters
    this.route.params.subscribe(params => {
      this.serviceId = +params['id']; // Convert id to a number
      this.selectedService = this.customerServices.find(service => service.id === this.serviceId);
    });
  }

  // Method to handle booking submission
  bookService() {
    const bookingData = {
      service: this.selectedService.title,
      name: this.name,
      email: this.email,
      phone: this.phone,
      date: this.date,
      time: this.time
    };

    this.http.post('http://localhost:5000/book-service', bookingData)
      .subscribe(
        (response: any) => {
          this.responseMessage = 'Service booked successfully!';
        },
        (error) => {
          this.responseMessage = 'Error occurred while booking the service.';
          console.error(error);
        }
      );
  }
}