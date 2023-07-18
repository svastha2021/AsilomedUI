import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmrHomeComponent } from './bmr-home/bmr-home.component';
import { CommonComponentModule } from 'src/app/common/common.module';
import { BMRRoutingModule } from './bmr-routing.module';
import { MaterialModule } from 'src/app/common/material.module';
import { FirstCutComponent } from './first-cut/first-cut.component';

@NgModule({
  declarations: [BmrHomeComponent, FirstCutComponent],
  imports: [
    CommonModule,
    BMRRoutingModule,
    CommonComponentModule,
    MaterialModule,
  ],
})
export class BmrModule {}
