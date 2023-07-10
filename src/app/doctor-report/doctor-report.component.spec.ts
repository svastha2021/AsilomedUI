import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorReportComponent } from './doctor-report.component';

describe('PatientwiseReportComponent', () => {
  let component: DoctorReportComponent;
  let fixture: ComponentFixture<DoctorReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
