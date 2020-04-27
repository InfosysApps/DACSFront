import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpheaderComponent } from './opheader.component';

describe('OpheaderComponent', () => {
  let component: OpheaderComponent;
  let fixture: ComponentFixture<OpheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
