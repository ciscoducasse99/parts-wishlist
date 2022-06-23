import { Component, Input} from '@angular/core';
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

  constructor(private modalService: ModalService<PDCCType>) {``
  }

  async showPartListingModal(part: PartListing): Promise<void> {
    // Lazy loading part-modal-content Component
    const {PartListingModalContentComponent} = await import('../part-listing-modal-content/part-listing-modal-content.component');
    
      /*
        TODO: Add data to PartModalContentComponent which would be the child of the Modal Wrapper
        Probably need to use the componentfactory here

        ViewContainerRef returns an instance of ComponentRef which has a property called 'instance'. From here, I can
        send the componentRef to the service.
      */


    // Passing the lazy loaded component into a wrapper component via ModalService
    const cmp = await this.modalService.open(PartListingModalContentComponent);

    cmp.instance.part = this.part
  }

}
