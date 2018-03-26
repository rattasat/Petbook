import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetlocationComponent } from './petlocation.component';

describe('PetlocationComponent', () => {
  let component: PetlocationComponent;
  let fixture: ComponentFixture<PetlocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetlocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
