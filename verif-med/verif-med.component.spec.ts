import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifMedComponent } from './verif-med.component';

describe('VerifMedComponent', () => {
  let component: VerifMedComponent;
  let fixture: ComponentFixture<VerifMedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifMedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
