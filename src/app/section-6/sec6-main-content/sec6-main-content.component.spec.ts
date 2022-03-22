import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec6MainContentComponent } from './sec6-main-content.component';

describe('Sec6MainContentComponent', () => {
  let component: Sec6MainContentComponent;
  let fixture: ComponentFixture<Sec6MainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sec6MainContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec6MainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
