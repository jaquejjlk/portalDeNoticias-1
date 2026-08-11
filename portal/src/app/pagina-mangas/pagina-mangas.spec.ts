import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMangas } from './pagina-mangas';

describe('PaginaMangas', () => {
  let component: PaginaMangas;
  let fixture: ComponentFixture<PaginaMangas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaMangas],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaMangas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
