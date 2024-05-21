import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraPaginacionComponent } from './barra-paginacion.component';

describe('BarraPaginacionComponent', () => {
  let component: BarraPaginacionComponent;
  let fixture: ComponentFixture<BarraPaginacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraPaginacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraPaginacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
