import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaDatosComponent } from './ficha-datos.component';

describe('FichaDatosComponent', () => {
  let component: FichaDatosComponent;
  let fixture: ComponentFixture<FichaDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
