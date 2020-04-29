import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpfooterComponent } from './opfooter.component';

describe('OpfooterComponent', () => {
  let component: OpfooterComponent;
  let fixture: ComponentFixture<OpfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
