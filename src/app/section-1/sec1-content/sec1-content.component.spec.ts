import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec1ContentComponent } from './sec1-content.component';

describe('Sec1ContentComponent', () => {
  let component: Sec1ContentComponent;
  let fixture: ComponentFixture<Sec1ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sec1ContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec1ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
