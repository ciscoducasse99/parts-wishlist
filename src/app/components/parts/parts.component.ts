import { Component, OnInit } from '@angular/core';

import { PartListingService } from '../../services/part-listing.service';
import { PartListing } from '../../interfaces/part-listing';


@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {

  partListings: PartListing[] = []

  constructor(private partListingService: PartListingService) { }

  ngOnInit(): void {
    this.getParts()
  }
 
  // Now it returns an Observable<Hero[]>
  getParts(): void {
    this.partListingService.getListings()
          // Waits for the Observable to emit the array of parts —which could happen now or 
          // several minutes from now (asyncroness). The subscribe() method passes the emitted array to the callback, which
          // sets the component's partListing property. This asynchronous approach will work when the services 
          // requests heroes from the server.
        .subscribe(parts => {
          this.partListings = parts
        });

  }
}
