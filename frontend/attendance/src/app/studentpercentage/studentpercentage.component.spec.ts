import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentpercentageComponent } from './studentpercentage.component';

describe('StudentpercentageComponent', () => {
  let component: StudentpercentageComponent;
  let fixture: ComponentFixture<StudentpercentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentpercentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentpercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
