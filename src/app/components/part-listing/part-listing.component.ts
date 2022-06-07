import { Component, Input, OnInit } from '@angular/core';
import { PartListing } from 'src/app/interfaces/part-listing';

@Component({
  selector: 'app-part-listing',
  templateUrl: './part-listing.component.html',
  styleUrls: ['./part-listing.component.scss']
})
export class PartListingComponent implements OnInit {

  @Input() part:PartListing;
  constructor() { }

  ngOnInit(): void {
  }

}
