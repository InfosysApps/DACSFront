import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormantsComponent } from './dormants.component';

describe('DormantsComponent', () => {
  let component: DormantsComponent;
  let fixture: ComponentFixture<DormantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
