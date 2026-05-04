import { TestBed } from '@angular/core/testing';

import { MatcherService } from './matcher.service';

describe('Matcher', () => {
  let service: MatcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
