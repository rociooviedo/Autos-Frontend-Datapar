import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamientosComponent } from './agendamientos.component';

describe('AgendamientosComponent', () => {
  let component: AgendamientosComponent;
  let fixture: ComponentFixture<AgendamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});