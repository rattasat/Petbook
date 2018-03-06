import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPetComponent } from './public-pet.component';

describe('PublicPetComponent', () => {
  let component: PublicPetComponent;
  let fixture: ComponentFixture<PublicPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
