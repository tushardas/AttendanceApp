import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakinattendanceComponent } from './takinattendance.component';

describe('TakinattendanceComponent', () => {
  let component: TakinattendanceComponent;
  let fixture: ComponentFixture<TakinattendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakinattendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakinattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
