import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrisioneirodeazcabanPage } from './prisioneirodeazcaban.page';

const routes: Routes = [
  {
    path: '',
    component: PrisioneirodeazcabanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrisioneirodeazcabanPageRoutingModule {}
