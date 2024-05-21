import { TestBed, inject } from '@angular/core/testing';

import { BuzonService } from './buzon.service';

describe('BuzonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuzonService]
    });
  });

  it('should be created', inject([BuzonService], (service: BuzonService) => {
    expect(service).toBeTruthy();
  }));
});
