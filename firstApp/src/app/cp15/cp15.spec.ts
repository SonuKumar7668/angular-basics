import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cp15 } from './cp15';

describe('Cp15', () => {
  let component: Cp15;
  let fixture: ComponentFixture<Cp15>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cp15],
    }).compileComponents();

    fixture = TestBed.createComponent(Cp15);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
