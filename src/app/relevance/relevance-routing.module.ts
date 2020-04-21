import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelevancePage } from './relevance.page';

const routes: Routes = [
  {
    path: '',
    component: RelevancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelevancePageRoutingModule {}
