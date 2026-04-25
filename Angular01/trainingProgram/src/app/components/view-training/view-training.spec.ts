import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTraining } from './view-training';

describe('ViewTraining', () => {
  let component: ViewTraining;
  let fixture: ComponentFixture<ViewTraining>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTraining],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewTraining);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
