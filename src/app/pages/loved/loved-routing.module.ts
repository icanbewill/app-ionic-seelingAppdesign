import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LovedPage } from './loved.page';

const routes: Routes = [
  {
    path: '',
    component: LovedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LovedPageRoutingModule {}
