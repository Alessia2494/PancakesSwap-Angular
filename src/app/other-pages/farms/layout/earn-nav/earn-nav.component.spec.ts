import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnNavComponent } from './earn-nav.component';

describe('EarnNavComponent', () => {
  let component: EarnNavComponent;
  let fixture: ComponentFixture<EarnNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarnNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
