import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalicedefogoPage } from './calicedefogo.page';

const routes: Routes = [
  {
    path: '',
    component: CalicedefogoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalicedefogoPageRoutingModule {}
