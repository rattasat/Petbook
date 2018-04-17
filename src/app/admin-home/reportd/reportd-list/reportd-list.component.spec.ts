import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportdListComponent } from './reportd-list.component';

describe('ReportdListComponent', () => {
  let component: ReportdListComponent;
  let fixture: ComponentFixture<ReportdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportdListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
