import { TestBed } from '@angular/core/testing';

import { PartListingService } from './part-listing.service';
import {HttpClientModule} from '@angular/common/http';

describe('PartListingService', () => {
  let service: PartListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PartListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
