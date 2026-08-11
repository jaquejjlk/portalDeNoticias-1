import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaModa } from './pagina-moda';

describe('PaginaModa', () => {
  let component: PaginaModa;
  let fixture: ComponentFixture<PaginaModa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaModa],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaModa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
