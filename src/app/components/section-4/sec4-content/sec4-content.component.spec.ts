import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec4ContentComponent } from './sec4-content.component';

describe('Sec4ContentComponent', () => {
  let component: Sec4ContentComponent;
  let fixture: ComponentFixture<Sec4ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sec4ContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec4ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
