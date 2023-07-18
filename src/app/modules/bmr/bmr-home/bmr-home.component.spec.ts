import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmrHomeComponent } from './bmr-home.component';

describe('BmrHomeComponent', () => {
  let component: BmrHomeComponent;
  let fixture: ComponentFixture<BmrHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmrHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmrHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
