import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cp18 } from './cp18';

describe('Cp18', () => {
  let component: Cp18;
  let fixture: ComponentFixture<Cp18>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cp18],
    }).compileComponents();

    fixture = TestBed.createComponent(Cp18);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
