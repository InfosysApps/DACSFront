import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OplegendComponent } from './oplegend.component';

describe('OplegendComponent', () => {
  let component: OplegendComponent;
  let fixture: ComponentFixture<OplegendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OplegendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OplegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
