import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaQueen } from './pagina-queen';

describe('PaginaQueen', () => {
  let component: PaginaQueen;
  let fixture: ComponentFixture<PaginaQueen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaQueen],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaQueen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
