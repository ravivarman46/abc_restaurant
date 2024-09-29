import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReservationComponent } from './reservation/reservation.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { StaffComponent } from './staff/staff.component';
import { CustomerComponent } from './customer/customer.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { OffersComponent } from './offers/offers.component';
import { SubmitQueryComponent } from './submit-query/submit-query.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomerServicesComponent } from './customer-services/customer-services.component';
import { CustomerServiceBookingComponent } from './customer-service-booking/customer-service-booking.component';
import { CustomerMenuComponent } from './customer-menu/customer-menu.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminReservationComponent } from './admin-reservation/admin-reservation.component';
import { AdminQueriesComponent } from './admin-queries/admin-queries.component';
import { AdminServicesComponent } from './admin-services/admin-services.component';
import { StaffReservationsComponent } from './staff-reservations/staff-reservations.component';
import { StaffQueriesComponent } from './staff-queries/staff-queries.component';
import { StaffOrdersComponent } from './staff-orders/staff-orders.component';
import { RatesAvailabilityComponent } from './rates-availability/rates-availability.component';
import { SignupComponent } from './signup/signup.component';
import { NavComponent } from './nav/nav.component';
import { CusNavComponent } from './nav/cus-nav/cus-nav.component';
import { LandingComponent } from './landing/landing.component';
import { AdminNavComponent } from './nav/admin-nav/admin-nav.component';
import { StaffNavComponent } from './nav/staff-nav/staff-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    GalleryComponent,
    ReservationComponent,
    LoginComponent,
    AdminComponent,
    StaffComponent,
    CustomerComponent,
    RegisterComponent,
    AboutUsComponent,
    MenuComponent,
    ContactComponent,
    OffersComponent,
    SubmitQueryComponent,
    ProfileComponent,
    CustomerServicesComponent,
    CustomerServiceBookingComponent,
    CustomerMenuComponent,
    CheckoutComponent,
    AdminReservationComponent,
    AdminQueriesComponent,
    AdminServicesComponent,
    StaffReservationsComponent,
    StaffQueriesComponent,
    StaffOrdersComponent,
    RatesAvailabilityComponent,
    SignupComponent,
    NavComponent,
    CusNavComponent,
    LandingComponent,
    AdminNavComponent,
    StaffNavComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,          
    ReactiveFormsModule     
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }