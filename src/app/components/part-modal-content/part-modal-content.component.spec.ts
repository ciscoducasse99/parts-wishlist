import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartModalContentComponent } from './part-modal-content.component';

describe('PartModalContentComponent', () => {
  let component: PartModalContentComponent;
  let fixture: ComponentFixture<PartModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartModalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
