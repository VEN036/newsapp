import { TestBed } from '@angular/core/testing';

import { AuthentivationService } from './authentivation.service';

describe('AuthentivationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthentivationService = TestBed.get(AuthentivationService);
    expect(service).toBeTruthy();
  });
});
