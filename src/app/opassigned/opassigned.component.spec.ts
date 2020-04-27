import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpassignedComponent } from './opassigned.component';

describe('OpassignedComponent', () => {
  let component: OpassignedComponent;
  let fixture: ComponentFixture<OpassignedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpassignedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpassignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
