import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverdetailsComponent } from './approverdetails.component';

describe('ApproverdetailsComponent', () => {
  let component: ApproverdetailsComponent;
  let fixture: ComponentFixture<ApproverdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproverdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproverdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
