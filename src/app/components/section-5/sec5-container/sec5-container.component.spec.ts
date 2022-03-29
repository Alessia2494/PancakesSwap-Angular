import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec5ContainerComponent } from './sec5-container.component';

describe('Sec5ContainerComponent', () => {
  let component: Sec5ContainerComponent;
  let fixture: ComponentFixture<Sec5ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sec5ContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec5ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
