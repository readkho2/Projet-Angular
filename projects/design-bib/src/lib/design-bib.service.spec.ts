import { TestBed } from '@angular/core/testing';

import { DesignBibService } from './design-bib.service';

describe('DesignBibService', () => {
  let service: DesignBibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignBibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
