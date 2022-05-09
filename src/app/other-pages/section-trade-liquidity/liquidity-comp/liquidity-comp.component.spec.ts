import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidityCompComponent } from './liquidity-comp.component';

describe('LiquidityCompComponent', () => {
  let component: LiquidityCompComponent;
  let fixture: ComponentFixture<LiquidityCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiquidityCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidityCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
