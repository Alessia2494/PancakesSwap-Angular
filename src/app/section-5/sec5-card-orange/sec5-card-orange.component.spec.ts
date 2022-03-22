import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec5CardOrangeComponent } from './sec5-card-orange.component';

describe('Sec5CardComponent', () => {
  let component: Sec5CardOrangeComponent;
  let fixture: ComponentFixture<Sec5CardOrangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sec5CardOrangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec5CardOrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
