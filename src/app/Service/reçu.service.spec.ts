import { TestBed } from '@angular/core/testing';

import { ReçuService } from './reçu.service';

describe('ReçuService', () => {
  let service: ReçuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReçuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
