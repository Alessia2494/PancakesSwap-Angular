import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTradeNowComponent } from './section-trade-now.component';

describe('SectionTradeNowComponent', () => {
  let component: SectionTradeNowComponent;
  let fixture: ComponentFixture<SectionTradeNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTradeNowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTradeNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
