import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimelineComponent } from './optimeline.component';

describe('OptimelineComponent', () => {
  let component: OptimelineComponent;
  let fixture: ComponentFixture<OptimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
