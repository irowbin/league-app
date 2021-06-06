import { TestBed } from '@angular/core/testing';

import { SimpleTableLibService } from './simple-table-lib.service';

describe('SimpleTableLibService', () => {
  let service: SimpleTableLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleTableLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
