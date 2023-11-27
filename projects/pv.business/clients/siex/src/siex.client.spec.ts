import { TestBed } from '@angular/core/testing';

import { SiexClient } from './siex.client';

describe('SiexService', () => {
  let service: SiexClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiexClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
