import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignBibComponent } from './design-bib.component';

describe('DesignBibComponent', () => {
  let component: DesignBibComponent;
  let fixture: ComponentFixture<DesignBibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignBibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesignBibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
