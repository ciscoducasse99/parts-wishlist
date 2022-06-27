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
  @Input() onDeleteListing: any
  updated: boolean = false;

  constructor() { }

  async updateListing(): Promise<PartListing>{
    return this.part
  }

  async deleteListing(part: PartListing): Promise<void>{ 
    
    this.onDeleteListing.emit(part)
    await this.modal?.close()
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }

}
