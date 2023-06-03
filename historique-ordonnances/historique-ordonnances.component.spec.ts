import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueOrdonnancesComponent } from './historique-ordonnances.component';

describe('HistoriqueOrdonnancesComponent', () => {
  let component: HistoriqueOrdonnancesComponent;
  let fixture: ComponentFixture<HistoriqueOrdonnancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueOrdonnancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueOrdonnancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
