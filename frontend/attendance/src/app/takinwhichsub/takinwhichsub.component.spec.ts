import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakinwhichsubComponent } from './takinwhichsub.component';

describe('TakinwhichsubComponent', () => {
  let component: TakinwhichsubComponent;
  let fixture: ComponentFixture<TakinwhichsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakinwhichsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakinwhichsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
