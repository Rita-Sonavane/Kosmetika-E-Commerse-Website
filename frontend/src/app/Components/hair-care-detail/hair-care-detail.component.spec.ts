import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairCareDetailComponent } from './hair-care-detail.component';

describe('HairCareDetailComponent', () => {
  let component: HairCareDetailComponent;
  let fixture: ComponentFixture<HairCareDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HairCareDetailComponent]
    });
    fixture = TestBed.createComponent(HairCareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
