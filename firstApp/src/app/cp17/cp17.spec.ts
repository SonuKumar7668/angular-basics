import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cp17 } from './cp17';

describe('Cp17', () => {
  let component: Cp17;
  let fixture: ComponentFixture<Cp17>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cp17],
    }).compileComponents();

    fixture = TestBed.createComponent(Cp17);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
