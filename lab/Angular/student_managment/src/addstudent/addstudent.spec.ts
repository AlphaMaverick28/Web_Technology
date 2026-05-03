import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addstudent } from './addstudent';

describe('Addstudent', () => {
  let component: Addstudent;
  let fixture: ComponentFixture<Addstudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addstudent],
    }).compileComponents();

    fixture = TestBed.createComponent(Addstudent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
