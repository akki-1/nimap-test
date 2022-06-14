import { TestBed } from '@angular/core/testing';

import { DataBindService } from './data-bind.service';

describe('DataBindService', () => {
  let service: DataBindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
