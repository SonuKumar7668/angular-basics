import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cp21 } from './cp21';

describe('Cp21', () => {
  let component: Cp21;
  let fixture: ComponentFixture<Cp21>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cp21],
    }).compileComponents();

    fixture = TestBed.createComponent(Cp21);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
