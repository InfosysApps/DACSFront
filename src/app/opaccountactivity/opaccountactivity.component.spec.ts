import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpaccountactivityComponent } from './opaccountactivity.component';

describe('OpaccountactivityComponent', () => {
  let component: OpaccountactivityComponent;
  let fixture: ComponentFixture<OpaccountactivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpaccountactivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpaccountactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
