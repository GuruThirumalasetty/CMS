import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerChittiListComponent } from './customer-chitti-list.component';

describe('CustomerChittiListComponent', () => {
  let component: CustomerChittiListComponent;
  let fixture: ComponentFixture<CustomerChittiListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerChittiListComponent]
    });
    fixture = TestBed.createComponent(CustomerChittiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
