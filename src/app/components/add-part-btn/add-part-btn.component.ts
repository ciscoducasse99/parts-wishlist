import { Component,Output, EventEmitter} from '@angular/core';
import { PartListing } from 'src/app/interfaces/part-listing';

import {ModalService} from '../../services/modal.service';

import { PartFormComponent as PartFormComponentType } from '../part-form/part-form.component';

@Component({
  selector: 'app-add-part-btn',
  template: `
    <button
      type="button"
      (click)="showPartsModal()"
      class="bg-green-800 px-3 py-1 rounded-full"
    >Add Part</button
    >
  `,
})
export class AddPartBtnComponent {
  constructor(private modalService: ModalService<PartFormComponentType>,) {}

  @Output() onSubmitForm = new EventEmitter<PartListing>();

  async showPartsModal(): Promise<void> {
    const {PartFormComponent} = await import(
      '../part-form/part-form.component'
    );

    const cmp = await this.modalService.open(PartFormComponent);
    cmp.instance.onSubmitForm = this.onSubmitForm

  }
}