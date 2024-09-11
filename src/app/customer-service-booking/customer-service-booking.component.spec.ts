import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerServiceBookingComponent } from './customer-service-booking.component';

describe('CustomerServiceBookingComponent', () => {
  let component: CustomerServiceBookingComponent;
  let fixture: ComponentFixture<CustomerServiceBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerServiceBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerServiceBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
