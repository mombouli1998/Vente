import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimanteComponent } from './imprimante.component';

describe('ImprimanteComponent', () => {
  let component: ImprimanteComponent;
  let fixture: ComponentFixture<ImprimanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprimanteComponent]
    });
    fixture = TestBed.createComponent(ImprimanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
