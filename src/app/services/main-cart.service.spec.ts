import { TestBed } from '@angular/core/testing';

import { MainCartService } from './main-cart.service';

describe('MainCartService', () => {
  let service: MainCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
