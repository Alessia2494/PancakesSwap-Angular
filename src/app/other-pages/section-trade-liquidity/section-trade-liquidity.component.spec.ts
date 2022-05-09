import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTradeLiquidityComponent } from './section-trade-liquidity.component';

describe('SectionTradeLiquidityComponent', () => {
  let component: SectionTradeLiquidityComponent;
  let fixture: ComponentFixture<SectionTradeLiquidityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTradeLiquidityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTradeLiquidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
