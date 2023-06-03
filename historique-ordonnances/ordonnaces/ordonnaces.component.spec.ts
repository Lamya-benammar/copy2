import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdonnacesComponent } from './ordonnaces.component';

describe('OrdonnacesComponent', () => {
  let component: OrdonnacesComponent;
  let fixture: ComponentFixture<OrdonnacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdonnacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdonnacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
