import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypetComponent } from './mypet.component';

describe('MypetComponent', () => {
  let component: MypetComponent;
  let fixture: ComponentFixture<MypetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
