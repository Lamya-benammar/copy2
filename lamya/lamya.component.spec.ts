import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamyaComponent } from './lamya.component';

describe('LamyaComponent', () => {
  let component: LamyaComponent;
  let fixture: ComponentFixture<LamyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LamyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LamyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
