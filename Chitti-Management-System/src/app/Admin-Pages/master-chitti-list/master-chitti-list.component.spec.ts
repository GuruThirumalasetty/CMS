import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterChittiListComponent } from './master-chitti-list.component';

describe('MasterChittiListComponent', () => {
  let component: MasterChittiListComponent;
  let fixture: ComponentFixture<MasterChittiListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterChittiListComponent]
    });
    fixture = TestBed.createComponent(MasterChittiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
