import { TestBed, inject } from '@angular/core/testing';

import { StudperService } from './studper.service';

describe('StudperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudperService]
    });
  });

  it('should ...', inject([StudperService], (service: StudperService) => {
    expect(service).toBeTruthy();
  }));
});
