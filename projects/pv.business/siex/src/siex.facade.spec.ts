import { TestBed } from '@angular/core/testing';

import { SiexFacade } from './siex.facade';

describe('SiexService', () => {
  let service: SiexFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiexFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
