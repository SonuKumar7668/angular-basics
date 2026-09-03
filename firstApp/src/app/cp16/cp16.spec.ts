import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cp16 } from './cp16';

describe('Cp16', () => {
  let component: Cp16;
  let fixture: ComponentFixture<Cp16>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cp16],
    }).compileComponents();

    fixture = TestBed.createComponent(Cp16);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
