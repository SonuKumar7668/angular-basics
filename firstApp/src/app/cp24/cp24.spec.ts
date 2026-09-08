import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cp24 } from './cp24';

describe('Cp24', () => {
  let component: Cp24;
  let fixture: ComponentFixture<Cp24>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cp24],
    }).compileComponents();

    fixture = TestBed.createComponent(Cp24);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
