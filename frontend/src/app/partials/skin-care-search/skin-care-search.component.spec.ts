import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinCareSearchComponent } from './skin-care-search.component';

describe('SkinCareSearchComponent', () => {
  let component: SkinCareSearchComponent;
  let fixture: ComponentFixture<SkinCareSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkinCareSearchComponent]
    });
    fixture = TestBed.createComponent(SkinCareSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
