import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoaceptadoComponent } from './turnoaceptado.component';

describe('TurnoaceptadoComponent', () => {
  let component: TurnoaceptadoComponent;
  let fixture: ComponentFixture<TurnoaceptadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnoaceptadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnoaceptadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
