import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RSocialesComponent } from './r-sociales.component';

describe('RSocialesComponent', () => {
  let component: RSocialesComponent;
  let fixture: ComponentFixture<RSocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RSocialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
