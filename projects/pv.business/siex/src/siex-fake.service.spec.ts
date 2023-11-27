import { TestBed } from '@angular/core/testing';

import { SiexFakeService } from './siex-fake.service';

describe('SiexFakeService', () => {
  let service: SiexFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiexFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
