import { TestBed } from '@angular/core/testing';

import { DetailFactureService } from './detail-facture.service';

describe('DetailFactureService', () => {
  let service: DetailFactureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailFactureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
