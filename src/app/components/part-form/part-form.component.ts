import {Component, NgModule, ViewChild, OnInit, Input, EventEmitter} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {ModalModule} from '../../modules/modal.module';
import {ModalComponent} from '../modal/modal.component';
import { PartListing } from 'src/app/interfaces/part-listing';

@Component({
  selector: 'app-part-form',
  templateUrl: './part-form.component.html',
  styleUrls: ['./part-form.component.scss']
})
export class PartFormComponent implements OnInit{
  @ViewChild('partFormComponent') modal:
  | ModalComponent<PartFormComponent>
  | undefined;

  partForm: FormGroup;
  submitted = false;

  @Input() onSubmitForm: EventEmitter<PartListing>

constructor(
  public fb: FormBuilder
) {
}

ngOnInit(){
 this.partForm = this.fb.group({
  name: ['', [Validators.required]],
  category: [, [Validators.required]],
  link:['', [Validators.required]],
  imageLink:['', [Validators.required]],
  partNumber:[''],
  reason:['']
  })
}

 // convenience getter for easy access to form fields
 get f() { return this.partForm.controls; }

async createListing(): Promise<void> {
  this.submitted = true;

  if(!this.partForm.valid) {
    return;
  }

  const newForm: PartListing ={
    ...this.partForm.value,
    obtained:false
  }
  
  this.onSubmitForm.emit(newForm)
  this.close()

}

async close(): Promise<void> {
  await this.modal?.close();
}

}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
  ],
  declarations: [PartFormComponent],
})
export class PartFormComponentModule {}
