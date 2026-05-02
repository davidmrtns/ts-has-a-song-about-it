import { TestBed } from '@angular/core/testing';

import { Matcher } from './matcher.service';

describe('Matcher', () => {
  let service: Matcher;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Matcher);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
