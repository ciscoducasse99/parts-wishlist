import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartListingModalContentComponent } from './part-listing-modal-content.component';
import {ReactiveFormsModule} from "@angular/forms"

xdescribe('PartListingModalContentComponent', () => {
  let component: PartListingModalContentComponent;
  let fixture: ComponentFixture<PartListingModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartListingModalContentComponent ],
      imports:[ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartListingModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('user should update from form changes', () => {
    const test = {
      reason:"Testing reason",
      obtained:false
    };
    component.updateForm.controls['reason'].setValue(test.reason);
    component.updateForm.controls['obtained'].setValue(test.obtained);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
