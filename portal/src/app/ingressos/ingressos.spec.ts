import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ingressos } from './ingressos';

describe('Ingressos', () => {
  let component: Ingressos;
  let fixture: ComponentFixture<Ingressos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ingressos],
    }).compileComponents();

    fixture = TestBed.createComponent(Ingressos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
