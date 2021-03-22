import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnorechazadoComponent } from './turnorechazado.component';

describe('TurnorechazadoComponent', () => {
  let component: TurnorechazadoComponent;
  let fixture: ComponentFixture<TurnorechazadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnorechazadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnorechazadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
