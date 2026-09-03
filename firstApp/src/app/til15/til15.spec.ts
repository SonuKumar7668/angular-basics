import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Til15 } from './til15';

describe('Til15', () => {
  let component: Til15;
  let fixture: ComponentFixture<Til15>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Til15],
    }).compileComponents();

    fixture = TestBed.createComponent(Til15);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
