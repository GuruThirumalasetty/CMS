import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterChittiCreateComponent } from './master-chitti-create.component';

describe('MasterChittiCreateComponent', () => {
  let component: MasterChittiCreateComponent;
  let fixture: ComponentFixture<MasterChittiCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterChittiCreateComponent]
    });
    fixture = TestBed.createComponent(MasterChittiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
