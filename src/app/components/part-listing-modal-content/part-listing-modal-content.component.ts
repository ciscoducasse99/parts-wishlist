import { Component, Input, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { PartListing } from 'src/app/interfaces/part-listing';

@Component({
  selector: 'app-part-listing-modal-content',
  templateUrl: './part-listing-modal-content.component.html',
  styleUrls: ['./part-listing-modal-content.component.scss']
})
export class PartListingModalContentComponent {
  @ViewChild('partListingModalContent') modal:
  | ModalComponent<PartListingModalContentComponent>
  | undefined;


  @Input() part: PartListing
  constructor() { }


  async close(): Promise<void> {
    console.log(this.modal)
    await this.modal?.close();
  }

}
