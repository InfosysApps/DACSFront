import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormantAccountsComponent } from './dormant-accounts.component';

describe('DormantAccountsComponent', () => {
  let component: DormantAccountsComponent;
  let fixture: ComponentFixture<DormantAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormantAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormantAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
