import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cp28 } from './cp28';

describe('Cp28', () => {
  let component: Cp28;
  let fixture: ComponentFixture<Cp28>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cp28],
    }).compileComponents();

    fixture = TestBed.createComponent(Cp28);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
