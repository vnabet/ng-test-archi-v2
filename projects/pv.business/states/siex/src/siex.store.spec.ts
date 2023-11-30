import { TestBed } from '@angular/core/testing';

import { SiexStore } from './siex.store';

describe('SiexService', () => {
  let service: SiexStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiexStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
