import { Component} from '@angular/core';

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

  async showPartsModal(): Promise<void> {
    const {PartFormComponent} = await import(
      '../part-form/part-form.component'
    );

    await this.modalService.open(PartFormComponent);
  }
}