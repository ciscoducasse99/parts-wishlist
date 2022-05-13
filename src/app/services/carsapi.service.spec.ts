import { TestBed } from '@angular/core/testing';

import { CarsapiService } from './carsapi.service';

describe('CarsapiServiceService', () => {
  let service: CarsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
