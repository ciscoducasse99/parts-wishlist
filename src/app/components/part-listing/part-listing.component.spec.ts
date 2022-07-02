import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartListingComponent } from './part-listing.component';

xdescribe('PartListingComponent', () => {
  let component: PartListingComponent;
  let fixture: ComponentFixture<PartListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
