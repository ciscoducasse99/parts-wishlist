import {Component, NgModule, ViewChild} from '@angular/core';
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

@Component({
  selector: 'app-part-form',
  templateUrl: './part-form.component.html',
  styleUrls: ['./part-form.component.scss']
})
export class PartFormComponent {
  @ViewChild('modalComponent') modal:
  | ModalComponent<PartFormComponent>
  | undefined;

partForm: FormGroup;

constructor(
  public fb: FormBuilder,
) {
  this.partForm = this.fb.group({
    username: ['', [Validators.required]]
  });
}

async createRecord(): Promise<void> {
  console.log(this.partForm.value);

  await this.close();
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
