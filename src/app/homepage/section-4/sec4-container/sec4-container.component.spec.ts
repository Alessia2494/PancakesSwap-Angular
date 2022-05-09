import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec4ContainerComponent } from './sec4-container.component';

describe('Sec4ContainerComponent', () => {
  let component: Sec4ContainerComponent;
  let fixture: ComponentFixture<Sec4ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sec4ContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec4ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
