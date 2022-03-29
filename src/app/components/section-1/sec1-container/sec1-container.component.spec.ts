import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec1ContainerComponent } from './sec1-container.component';

describe('Sec1ContainerComponent', () => {
  let component: Sec1ContainerComponent;
  let fixture: ComponentFixture<Sec1ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sec1ContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec1ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
