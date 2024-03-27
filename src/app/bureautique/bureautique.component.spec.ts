import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BureautiqueComponent } from './bureautique.component';

describe('BureautiqueComponent', () => {
  let component: BureautiqueComponent;
  let fixture: ComponentFixture<BureautiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BureautiqueComponent]
    });
    fixture = TestBed.createComponent(BureautiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
