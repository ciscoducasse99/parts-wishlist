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
  loaded:boolean = false

  constructor(private partListingService: PartListingService) { }

  ngOnInit(): void {
    this.getParts()
  }

  getParts(){
    this.partListingService.getListings()
          // Waits for the Observable to emit the array of parts —which could happen now or 
          // several minutes from now (async). The subscribe() method passes the emitted array to the callback, which
          // sets the component's partListing property.
        .subscribe(parts => {
          this.partListings = parts
          setTimeout(()=>this.loaded = true, 3000)
        });

  }

  createNewListing(part: PartListing){
    this.partListingService.createListing(part).subscribe(part=>{
      this.partListings.push(part)
    })
  }

  deleteListing(part: PartListing){
    this.partListingService.deleteListing(part).subscribe(
      () => (this.partListings = this.partListings.filter((p) => p.id !== part.id))
    )
  }

  updateListing(part: PartListing){
    this.partListingService.updateListing(part).subscribe(
      (updatedPart) => {
        this.partListings[this.partListings.findIndex(p => p.id === updatedPart.id)] = updatedPart
      }
    )
  }
}
