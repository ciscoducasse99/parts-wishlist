import { Component, Input, Output, EventEmitter} from '@angular/core';
import { PartListing } from 'src/app/interfaces/part-listing';
import { ModalService } from 'src/app/services/modal.service';
import { PartListingModalContentComponent as PDCCType } from '../part-listing-modal-content/part-listing-modal-content.component';
@Component({
  selector: 'app-part-listing',
  templateUrl: './part-listing.component.html',
  styleUrls: ['./part-listing.component.scss']
})
export class PartListingComponent {

  @Input() part:PartListing;
  @Output() onDeleteListing = new EventEmitter<PartListing>()
  @Output() onUpdateListing = new EventEmitter<PartListing>()

  constructor(private modalService: ModalService<PDCCType>) {``
  }

  async showPartListingModal(part: PartListing): Promise<void> {
    // Lazy loading part-modal-content Component
    const {PartListingModalContentComponent} = await import('../part-listing-modal-content/part-listing-modal-content.component');
    
    // Passing the lazy loaded component into a wrapper component via ModalService
    const cmp = await this.modalService.open(PartListingModalContentComponent);

    // assign the new instance a 'part' object to display fetched data
    cmp.instance.part = this.part
    cmp.instance.onDeleteListing = this.onDeleteListing
    cmp.instance.onUpdateListing = this.onUpdateListing
  }

}
