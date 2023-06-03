import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuggestionsReclamationsComponent } from './suggestions-reclamations.component';

describe('SuggestionsReclamationsComponent', () => {
  let component: SuggestionsReclamationsComponent;
  let fixture: ComponentFixture<SuggestionsReclamationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionsReclamationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionsReclamationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
