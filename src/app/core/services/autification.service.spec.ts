import { TestBed } from '@angular/core/testing';

import { AutificationService } from './autification.service';

describe('AutificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutificationService = TestBed.get(AutificationService);
    expect(service).toBeTruthy();
  });
});
