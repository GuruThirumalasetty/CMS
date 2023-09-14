import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChittiPaymentDetailsComponent } from './chitti-payment-details.component';

describe('ChittiPaymentDetailsComponent', () => {
  let component: ChittiPaymentDetailsComponent;
  let fixture: ComponentFixture<ChittiPaymentDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChittiPaymentDetailsComponent]
    });
    fixture = TestBed.createComponent(ChittiPaymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
