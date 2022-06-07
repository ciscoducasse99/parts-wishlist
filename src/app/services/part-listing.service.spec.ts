import { TestBed } from '@angular/core/testing';

import { PartListingService } from './part-listing.service';

describe('PartListingService', () => {
  let service: PartListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
