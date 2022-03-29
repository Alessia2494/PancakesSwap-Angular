import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec5CardIndigoComponent } from './sec5-card-indigo.component';

describe('Sec5CardIndigoComponent', () => {
  let component: Sec5CardIndigoComponent;
  let fixture: ComponentFixture<Sec5CardIndigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sec5CardIndigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec5CardIndigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
