import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffQueriesComponent } from './staff-queries.component';

describe('StaffQueriesComponent', () => {
  let component: StaffQueriesComponent;
  let fixture: ComponentFixture<StaffQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaffQueriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
