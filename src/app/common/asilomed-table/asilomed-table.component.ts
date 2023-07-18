import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { UtilityService } from 'src/app/utilities/services/utility.service';

type bmr = {
  mc_id: number | null;
  start_time: string;
  end_time: string;
  process_qty: number;
  accept_qty: number;
  reject_qty: number;
  reject_reason: string;
};
@Component({
  selector: 'app-data-table',
  templateUrl: './asilomed-table.component.html',
  styleUrls: ['./asilomed-table.component.scss'],
})
export class AsilomedTableComponent implements OnInit {
  @Input()
  set tableData(value: bmr[]) {
    this.dataSource.data = value;
  }
  @Output() dataEmit = new EventEmitter();

  dataSource = new MatTableDataSource(this.tableData);
  displayedColumns: string[] = [
    'mc_id',
    'start_time',
    'end_time',
    'process_qty',
    'accept_qty',
    'reject_qty',
    'reject_reason',
    'save',
  ];
  //@ViewChild(MatSort) sort: MatSort | undefined;
  constructor(private utilityService: UtilityService) {}
  ngOnInit() {}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  saveBlocking(blocking: bmr) {
    this.dataEmit.emit(blocking);
  }
}
