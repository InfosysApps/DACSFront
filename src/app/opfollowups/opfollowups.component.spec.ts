import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpfollowupsComponent } from './opfollowups.component';

describe('OpfollowupsComponent', () => {
  let component: OpfollowupsComponent;
  let fixture: ComponentFixture<OpfollowupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpfollowupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpfollowupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
