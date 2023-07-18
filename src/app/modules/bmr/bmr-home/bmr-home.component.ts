import { Component } from '@angular/core';
import { CommonDetailComponent } from 'src/app/common/common-detail/common-detail.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bmr-home',
  templateUrl: './bmr-home.component.html',
  styleUrls: ['./bmr-home.component.scss'],
})
export class BmrHomeComponent {
  constructor(private router: Router) {}
  bmrSections = [
    'Indent',
    '1st Cut Process',
    '2nd Cut Process',
    'Inspection',
    'Primary Packing',
    'Sterilization',
    'Secondary Packing',
  ];

  navigate(page: string) {
    this.router.navigate(['/first-cut']);
  }
}
