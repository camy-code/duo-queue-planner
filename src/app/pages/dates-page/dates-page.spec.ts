import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesPage } from './dates-page';

describe('DatesPage', () => {
  let component: DatesPage;
  let fixture: ComponentFixture<DatesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DatesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
