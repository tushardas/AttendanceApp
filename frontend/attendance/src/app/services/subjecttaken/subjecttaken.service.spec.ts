import { TestBed, inject } from '@angular/core/testing';

import { SubjecttakenService } from './subjecttaken.service';

describe('SubjecttakenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubjecttakenService]
    });
  });

  it('should ...', inject([SubjecttakenService], (service: SubjecttakenService) => {
    expect(service).toBeTruthy();
  }));
});
