import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonePointilleeComponent } from './zone-pointillee.component';

describe('ZonePointilleeComponent', () => {
  let component: ZonePointilleeComponent;
  let fixture: ComponentFixture<ZonePointilleeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZonePointilleeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZonePointilleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
