import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fruit2 } from './fruit2';

describe('Fruit2', () => {
  let component: Fruit2;
  let fixture: ComponentFixture<Fruit2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fruit2],
    }).compileComponents();

    fixture = TestBed.createComponent(Fruit2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
