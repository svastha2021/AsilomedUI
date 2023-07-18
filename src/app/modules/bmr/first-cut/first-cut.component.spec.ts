import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCutComponent } from './first-cut.component';

describe('FirstCutComponent', () => {
  let component: FirstCutComponent;
  let fixture: ComponentFixture<FirstCutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstCutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
