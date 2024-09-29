import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { StaffComponent } from './staff/staff.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicesComponent } from './services/services.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { OffersComponent } from './offers/offers.component';    
import { SubmitQueryComponent } from './submit-query/submit-query.component';
import { CustomerServicesComponent } from './customer-services/customer-services.component';
import { CustomerServiceBookingComponent } from './customer-service-booking/customer-service-booking.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomerMenuComponent } from './customer-menu/customer-menu.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminReservationComponent } from './admin-reservation/admin-reservation.component';
import { AdminServicesComponent } from './admin-services/admin-services.component';
import { AdminQueriesComponent } from './admin-queries/admin-queries.component';
import { StaffReservationsComponent } from './staff-reservations/staff-reservations.component';
import { StaffQueriesComponent } from './staff-queries/staff-queries.component';
import { StaffOrdersComponent } from './staff-orders/staff-orders.component';

import { AuthGuard } from './auth.guard'; 
import { SignupComponent } from './signup/signup.component';
import { NavComponent } from './nav/nav.component';
import { LandingComponent } from './landing/landing.component';
import { AdminNavComponent } from './nav/admin-nav/admin-nav.component';
import { StaffNavComponent } from './nav/staff-nav/staff-nav.component';
import { CusNavComponent } from './nav/cus-nav/cus-nav.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customer', component: CustomerComponent },  
  { path: 'admin', component: AdminComponent },        
  { path: 'staff', component: StaffComponent },    
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'contact', component: ContactComponent },  
  { path: 'offers', component: OffersComponent },
  { path: 'submit-query', component: SubmitQueryComponent }, 
  { path: 'customer-services', component: CustomerServicesComponent },
  { path: 'customer-service-booking/:id', component: CustomerServiceBookingComponent },
  { path: 'customer-menu', component: CustomerMenuComponent }, 
  { path: 'checkout', component: CheckoutComponent }, 
  { path: 'admin/reservations', component: AdminReservationComponent },
  { path: 'admin/services', component: AdminServicesComponent },  
  { path: 'admin/queries', component: AdminQueriesComponent },
  { path: 'staff-reservations', component: StaffReservationsComponent },
  { path: 'staff-queries', component: StaffQueriesComponent },
  { path: 'staff-orders', component: StaffOrdersComponent },
  {path: 'signup', component: SignupComponent},
  {path: 'nav', component: NavComponent},
  {path: 'landing', component: LandingComponent},
  {path: 'admin-nav', component: AdminNavComponent},
  {path: 'cus-nav', component: CusNavComponent},
  {path: 'staff-nav', component: StaffComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
