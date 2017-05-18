import { TestBed, inject } from '@angular/core/testing';

import { SubbyTeacherService } from './subby-teacher.service';

describe('SubbyTeacherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubbyTeacherService]
    });
  });

  it('should ...', inject([SubbyTeacherService], (service: SubbyTeacherService) => {
    expect(service).toBeTruthy();
  }));
});
