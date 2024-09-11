import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesAvailabilityComponent } from './rates-availability.component';

describe('RatesAvailabilityComponent', () => {
  let component: RatesAvailabilityComponent;
  let fixture: ComponentFixture<RatesAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RatesAvailabilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatesAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
