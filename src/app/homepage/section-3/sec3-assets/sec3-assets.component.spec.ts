import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec3AssetsComponent } from './sec3-assets.component';

describe('Sec3AssetsComponent', () => {
  let component: Sec3AssetsComponent;
  let fixture: ComponentFixture<Sec3AssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sec3AssetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec3AssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
