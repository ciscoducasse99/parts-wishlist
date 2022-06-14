import { Component, Input, Injector, ComponentFactoryResolver} from '@angular/core';
import { PartListing } from 'src/app/interfaces/part-listing';
import { ModalService } from 'src/app/services/modal.service';
import { PartModalContentComponent as PartModalContentType } from '../part-modal-content/part-modal-content.component';

@Component({
  selector: 'app-part-listing',
  templateUrl: './part-listing.component.html',
  styleUrls: ['./part-listing.component.scss']
})
export class PartListingComponent {

  @Input() part:PartListing;
  constructor(private modalService: ModalService<any>, private injector: Injector,
    private r: ComponentFactoryResolver) {``
  }

  async showPartListingModal(part: PartListing): Promise<void> {
    // Lazy loading part-modal-content Component
    const {PartModalContentComponent} = await import('../part-modal-content/part-modal-content.component');

      /*
        TODO: Add data to PartModalContentComponent which would be the child of the Modal Wrapper
        Probably need to use the componentfactory here

        ViewContainerRef returns an instance of ComponentRef which has a property called 'instance'. From here, I can
        send the componentRef to the service.
      */

      
    let factory = this.r.resolveComponentFactory(PartModalContentComponent);
    let componentRef = factory.create(this.injector);
    componentRef.instance.part = part

    console.log(componentRef)

    // Passing the lazy loaded component into a wrapper component via ModalService
    await this.modalService.open(PartModalContentComponent);
  }

}
