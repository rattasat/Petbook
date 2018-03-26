import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingOpacityComponent } from './loading-opacity.component';

describe('LoadingOpacityComponent', () => {
  let component: LoadingOpacityComponent;
  let fixture: ComponentFixture<LoadingOpacityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingOpacityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingOpacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
