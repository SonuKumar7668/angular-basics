import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cp20 } from './cp20';

describe('Cp20', () => {
  let component: Cp20;
  let fixture: ComponentFixture<Cp20>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cp20],
    }).compileComponents();

    fixture = TestBed.createComponent(Cp20);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
