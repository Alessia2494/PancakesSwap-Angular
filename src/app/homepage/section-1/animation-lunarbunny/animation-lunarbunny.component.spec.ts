import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationLunarbunnyComponent } from './animation-lunarbunny.component';

describe('AnimationLunarbunnyComponent', () => {
  let component: AnimationLunarbunnyComponent;
  let fixture: ComponentFixture<AnimationLunarbunnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationLunarbunnyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationLunarbunnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
