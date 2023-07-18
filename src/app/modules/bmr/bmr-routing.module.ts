import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BmrHomeComponent } from './bmr-home/bmr-home.component';
import { FirstCutComponent } from './first-cut/first-cut.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'bmr-home',
    pathMatch: 'full',
  },
  {
    path: 'bmr-home',
    component: BmrHomeComponent,
  },
  {
    path: 'first-cut',
    component: FirstCutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BMRRoutingModule {}
