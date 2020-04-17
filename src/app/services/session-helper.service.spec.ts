import { TestBed } from '@angular/core/testing';

import { SessionHelperService } from './session-helper.service';

describe('SessionHelperService', () => {
  let service: SessionHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
