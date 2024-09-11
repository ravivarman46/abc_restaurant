import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-services',
  templateUrl: './customer-services.component.html',
  styleUrls: ['./customer-services.component.css']
})
export class CustomerServicesComponent {
  searchQuery: string = '';

  // Array of 20 services with updated names
  customerServices = [
    { title: 'Concierge Service', description: 'Our dedicated concierge is here to assist you 24/7.', iconClass: 'fas fa-concierge-bell', id: 1 },
    { title: 'Help & Support', description: 'Reach out for any assistance you need during your stay.', iconClass: 'fas fa-hands-helping', id: 2 },
    { title: 'Bellhop Service', description: 'We provide efficient luggage assistance.', iconClass: 'fas fa-bell', id: 3 },
    { title: 'Group Dining', description: 'Perfect for family meals or corporate events.', iconClass: 'fas fa-users', id: 4 },
    { title: '24/7 Helpline', description: 'Get help anytime with our 24/7 service line.', iconClass: 'fas fa-headset', id: 5 },
    { title: 'Taxi Service', description: 'Book taxis directly through our app.', iconClass: 'fas fa-taxi', id: 6 },
    { title: 'Gourmet Meals', description: 'Experience the finest cuisine.', iconClass: 'fas fa-drumstick-bite', id: 7 },
    { title: 'Wine & Dine', description: 'Enjoy fine wines with a fantastic meal.', iconClass: 'fas fa-wine-glass-alt', id: 8 },
    { title: 'Quick Bites', description: 'Grab delicious snacks on the go.', iconClass: 'fas fa-hamburger', id: 9 },
    { title: 'Cocktail Bar', description: 'Relax with custom-made cocktails.', iconClass: 'fas fa-cocktail', id: 10 },
    { title: 'Birthday Catering', description: 'We cater special birthday celebrations.', iconClass: 'fas fa-birthday-cake', id: 11 },
    { title: 'Coffee & Tea', description: 'Enjoy a variety of premium coffees and teas.', iconClass: 'fas fa-coffee', id: 12 },
    { title: 'WiFi Access', description: 'Stay connected with our high-speed internet.', iconClass: 'fas fa-wifi', id: 13 },
    { title: 'Tour Guide', description: 'Explore the city with our expert guides.', iconClass: 'fas fa-map-marked-alt', id: 14 },
    { title: 'Event Planning', description: 'We help plan your special events.', iconClass: 'fas fa-calendar-alt', id: 15 },
    { title: 'Live Music', description: 'Enjoy live music performances.', iconClass: 'fas fa-music', id: 16 },
    { title: 'Photography', description: 'Capture your memories with our photography services.', iconClass: 'fas fa-camera-retro', id: 17 },
    { title: 'Online Shopping', description: 'Order products directly from our online store.', iconClass: 'fas fa-shopping-cart', id: 18 },
    { title: 'Phone Services', description: 'Stay connected with our local and international calling plans.', iconClass: 'fas fa-phone', id: 19 },
    { title: 'Luggage Assistance', description: 'We take care of your baggage with ease.', iconClass: 'fas fa-luggage-cart', id: 20 }
  ];

  filteredCustomerServices = this.customerServices;

  constructor(private router: Router) {}

  // Method to filter customer services based on search input
  filterCustomerServices() {
    this.filteredCustomerServices = this.customerServices.filter(service => 
      service.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Redirect to customer service booking page
  goToCustomerServiceDetails(service: any) {
    this.router.navigate(['/customer-service-booking', service.id]);  // Navigate with service ID
  }
}
