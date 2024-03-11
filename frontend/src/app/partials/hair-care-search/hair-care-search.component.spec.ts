import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairCareSearchComponent } from './hair-care-search.component';

describe('HairCareSearchComponent', () => {
  let component: HairCareSearchComponent;
  let fixture: ComponentFixture<HairCareSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HairCareSearchComponent]
    });
    fixture = TestBed.createComponent(HairCareSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
