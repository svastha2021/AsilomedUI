import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { CommonDetailComponent } from './common-detail/common-detail.component';
import { HeaderComponent } from '../common/header/header.component';
import { RouterModule } from '@angular/router';
import { AsilomedTableComponent } from './asilomed-table/asilomed-table.component';
@NgModule({
  declarations: [CommonDetailComponent, HeaderComponent,AsilomedTableComponent],
  exports: [CommonDetailComponent, HeaderComponent,AsilomedTableComponent],
  imports: [CommonModule,FormsModule, RouterModule,MaterialModule],
})
export class CommonComponentModule {}
