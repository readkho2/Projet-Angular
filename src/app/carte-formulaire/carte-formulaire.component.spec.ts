import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteFormulaireComponent } from './carte-formulaire.component';

describe('CarteFormulaireComponent', () => {
  let component: CarteFormulaireComponent;
  let fixture: ComponentFixture<CarteFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteFormulaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarteFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
