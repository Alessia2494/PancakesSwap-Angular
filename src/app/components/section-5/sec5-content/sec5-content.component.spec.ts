import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec5ContentComponent } from './sec5-content.component';

describe('Sec5ContentComponent', () => {
  let component: Sec5ContentComponent;
  let fixture: ComponentFixture<Sec5ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sec5ContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec5ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
