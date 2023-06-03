import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutOrdonnanceComponent } from './ajout-ordonnance.component';

describe('AjoutOrdonnanceComponent', () => {
  let component: AjoutOrdonnanceComponent;
  let fixture: ComponentFixture<AjoutOrdonnanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutOrdonnanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutOrdonnanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
