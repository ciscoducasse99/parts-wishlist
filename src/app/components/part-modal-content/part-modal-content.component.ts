import { Component, Input, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { PartListing } from 'src/app/interfaces/part-listing';

@Component({
  selector: 'app-part-modal-content',
  templateUrl: './part-modal-content.component.html',
  styleUrls: ['./part-modal-content.component.scss']
})
export class PartModalContentComponent {
  @ViewChild('partModal') modal:
  | ModalComponent<PartModalContentComponent>
  | undefined;

  @Input() part: PartListing
  constructor() { }


  async close(): Promise<void> {
    await this.modal?.close();

    console.log(ViewChild)
  }

}
