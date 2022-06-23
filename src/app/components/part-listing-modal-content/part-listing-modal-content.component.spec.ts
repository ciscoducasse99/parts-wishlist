import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartListingModalContentComponent } from './part-listing-modal-content.component';

describe('PartListingModalContentComponent', () => {
  let component: PartListingModalContentComponent;
  let fixture: ComponentFixture<PartListingModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartListingModalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartListingModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
