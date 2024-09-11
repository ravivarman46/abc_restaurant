import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitQueryComponent } from './submit-query.component';

describe('SubmitQueryComponent', () => {
  let component: SubmitQueryComponent;
  let fixture: ComponentFixture<SubmitQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmitQueryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
