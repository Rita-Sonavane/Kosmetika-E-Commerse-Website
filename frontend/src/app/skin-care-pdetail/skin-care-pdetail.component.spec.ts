import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinCarePdetailComponent } from './skin-care-pdetail.component';

describe('SkinCarePdetailComponent', () => {
  let component: SkinCarePdetailComponent;
  let fixture: ComponentFixture<SkinCarePdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkinCarePdetailComponent]
    });
    fixture = TestBed.createComponent(SkinCarePdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
