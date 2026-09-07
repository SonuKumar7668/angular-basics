import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cp22 } from './cp22';

describe('Cp22', () => {
  let component: Cp22;
  let fixture: ComponentFixture<Cp22>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cp22],
    }).compileComponents();

    fixture = TestBed.createComponent(Cp22);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
