import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCompComponent } from './detail-comp.component';

describe('DetailCompComponent', () => {
  let component: DetailCompComponent;
  let fixture: ComponentFixture<DetailCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
