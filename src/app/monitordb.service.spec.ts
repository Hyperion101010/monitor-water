import { TestBed } from '@angular/core/testing';

import { MonitordbService } from './monitordb.service';

describe('MonitordbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonitordbService = TestBed.get(MonitordbService);
    expect(service).toBeTruthy();
  });
});
