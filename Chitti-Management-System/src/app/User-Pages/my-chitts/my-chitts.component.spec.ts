import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChittsComponent } from './my-chitts.component';

describe('MyChittsComponent', () => {
  let component: MyChittsComponent;
  let fixture: ComponentFixture<MyChittsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyChittsComponent]
    });
    fixture = TestBed.createComponent(MyChittsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
