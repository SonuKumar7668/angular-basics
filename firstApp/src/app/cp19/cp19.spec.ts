import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cp19 } from './cp19';

describe('Cp19', () => {
  let component: Cp19;
  let fixture: ComponentFixture<Cp19>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cp19],
    }).compileComponents();

    fixture = TestBed.createComponent(Cp19);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
