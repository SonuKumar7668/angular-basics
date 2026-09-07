import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cp23 } from './cp23';

describe('Cp23', () => {
  let component: Cp23;
  let fixture: ComponentFixture<Cp23>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cp23],
    }).compileComponents();

    fixture = TestBed.createComponent(Cp23);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
