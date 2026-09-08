import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cp26 } from './cp26';

describe('Cp26', () => {
  let component: Cp26;
  let fixture: ComponentFixture<Cp26>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cp26],
    }).compileComponents();

    fixture = TestBed.createComponent(Cp26);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
