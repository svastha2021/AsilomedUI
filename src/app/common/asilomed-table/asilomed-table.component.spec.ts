import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsilomedTableComponent } from './asilomed-table.component';

describe('AsilomedTableComponent', () => {
  let component: AsilomedTableComponent;
  let fixture: ComponentFixture<AsilomedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsilomedTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsilomedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
