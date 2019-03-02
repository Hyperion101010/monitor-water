import { TestBed } from '@angular/core/testing';

import { WaterHarvestingService } from './water-harvesting.service';

describe('WaterHarvestingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WaterHarvestingService = TestBed.get(WaterHarvestingService);
    expect(service).toBeTruthy();
  });
});
