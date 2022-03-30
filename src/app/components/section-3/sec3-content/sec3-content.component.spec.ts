import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec3ContentComponent } from './sec3-content.component';

describe('Sec3ContentComponent', () => {
  let component: Sec3ContentComponent;
  let fixture: ComponentFixture<Sec3ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sec3ContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec3ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
