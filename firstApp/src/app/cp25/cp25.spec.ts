import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cp25 } from './cp25';

describe('Cp25', () => {
  let component: Cp25;
  let fixture: ComponentFixture<Cp25>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cp25],
    }).compileComponents();

    fixture = TestBed.createComponent(Cp25);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
