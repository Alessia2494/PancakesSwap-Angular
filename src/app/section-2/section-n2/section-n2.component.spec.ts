import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionN2Component } from './section-n2.component';

describe('SectionN2Component', () => {
  let component: SectionN2Component;
  let fixture: ComponentFixture<SectionN2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionN2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionN2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
