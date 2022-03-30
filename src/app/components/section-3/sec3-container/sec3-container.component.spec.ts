import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec3ContainerComponent } from './sec3-container.component';

describe('Sec3ContainerComponent', () => {
  let component: Sec3ContainerComponent;
  let fixture: ComponentFixture<Sec3ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sec3ContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec3ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
