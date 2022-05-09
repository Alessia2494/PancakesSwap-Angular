import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationGraficComponent } from './animation-grafic.component';

describe('AnimationGraficComponent', () => {
  let component: AnimationGraficComponent;
  let fixture: ComponentFixture<AnimationGraficComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationGraficComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationGraficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
