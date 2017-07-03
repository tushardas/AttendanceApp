import { TestBed, inject } from '@angular/core/testing';

import { TeacherserviceService } from './teacherservice.service';

describe('TeacherserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeacherserviceService]
    });
  });

  it('should ...', inject([TeacherserviceService], (service: TeacherserviceService) => {
    expect(service).toBeTruthy();
  }));
});
