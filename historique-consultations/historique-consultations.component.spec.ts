import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueConsultationsComponent } from './historique-consultations.component';

describe('HistoriqueConsultationsComponent', () => {
  let component: HistoriqueConsultationsComponent;
  let fixture: ComponentFixture<HistoriqueConsultationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueConsultationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueConsultationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
