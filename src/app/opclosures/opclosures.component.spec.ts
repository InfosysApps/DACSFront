import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpclosuresComponent } from './opclosures.component';

describe('OpclosuresComponent', () => {
  let component: OpclosuresComponent;
  let fixture: ComponentFixture<OpclosuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpclosuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpclosuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
