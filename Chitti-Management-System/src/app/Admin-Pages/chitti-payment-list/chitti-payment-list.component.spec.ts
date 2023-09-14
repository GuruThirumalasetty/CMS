import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChittiPaymentListComponent } from './chitti-payment-list.component';

describe('ChittiPaymentListComponent', () => {
  let component: ChittiPaymentListComponent;
  let fixture: ComponentFixture<ChittiPaymentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChittiPaymentListComponent]
    });
    fixture = TestBed.createComponent(ChittiPaymentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
