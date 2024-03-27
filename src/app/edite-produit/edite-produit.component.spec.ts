import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeProduitComponent } from './edite-produit.component';

describe('EditeProduitComponent', () => {
  let component: EditeProduitComponent;
  let fixture: ComponentFixture<EditeProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditeProduitComponent]
    });
    fixture = TestBed.createComponent(EditeProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
