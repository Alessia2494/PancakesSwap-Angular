import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec6StatisticsComponent } from './sec6-statistics.component';

describe('Sec6StatisticsComponent', () => {
  let component: Sec6StatisticsComponent;
  let fixture: ComponentFixture<Sec6StatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sec6StatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec6StatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
