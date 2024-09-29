import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusNavComponent } from './cus-nav.component';

describe('CusNavComponent', () => {
  let component: CusNavComponent;
  let fixture: ComponentFixture<CusNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CusNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
