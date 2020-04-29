import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpaccountformComponent } from './opaccountform.component';

describe('OpaccountformComponent', () => {
  let component: OpaccountformComponent;
  let fixture: ComponentFixture<OpaccountformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpaccountformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpaccountformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
