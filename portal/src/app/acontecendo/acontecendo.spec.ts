import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acontecendo } from './acontecendo';

describe('Acontecendo', () => {
  let component: Acontecendo;
  let fixture: ComponentFixture<Acontecendo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Acontecendo],
    }).compileComponents();

    fixture = TestBed.createComponent(Acontecendo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
