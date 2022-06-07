import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartBtnComponent } from './add-part-btn.component';

describe('AddPartBtnComponent', () => {
  let component: AddPartBtnComponent;
  let fixture: ComponentFixture<AddPartBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPartBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPartBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
