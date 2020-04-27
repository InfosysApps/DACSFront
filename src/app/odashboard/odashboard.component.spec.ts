import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ODashboardComponent } from './odashboard.component';

describe('ODashboardComponent', () => {
  let component: ODashboardComponent;
  let fixture: ComponentFixture<ODashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ODashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ODashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
