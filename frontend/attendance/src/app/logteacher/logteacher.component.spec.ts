import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogteacherComponent } from './logteacher.component';

describe('LogteacherComponent', () => {
  let component: LogteacherComponent;
  let fixture: ComponentFixture<LogteacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogteacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
