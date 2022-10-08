import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoprogLogoComponent } from './yoprog-logo.component';

describe('YoprogLogoComponent', () => {
  let component: YoprogLogoComponent;
  let fixture: ComponentFixture<YoprogLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoprogLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoprogLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
