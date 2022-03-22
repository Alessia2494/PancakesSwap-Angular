import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec6ContainerComponent } from './sec6-container.component';

describe('Sec6ContainerComponent', () => {
  let component: Sec6ContainerComponent;
  let fixture: ComponentFixture<Sec6ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sec6ContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec6ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
