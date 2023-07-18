import { Component, OnInit } from '@angular/core';
interface bmr {
  mc_id: number;
  start_time: string;
  end_time: string;
  process_qty: number;
  accept_qty: number;
  reject_qty: number;
  reject_reason: string;
}
@Component({
  selector: 'app-first-cut',
  templateUrl: './first-cut.component.html',
  styleUrls: ['./first-cut.component.scss'],
})
export class FirstCutComponent implements OnInit {
  tableData: bmr[] = [
    {
      mc_id: 1,
      start_time: '',
      end_time: '',
      process_qty: 0,
      accept_qty: 0,
      reject_qty: 0,
      reject_reason: '',
    },
  ];
  ngOnInit(): void {}

  receieveData(dataToSave: bmr) {
    //save call
  }
}
