import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedrafilosofalPage } from './pedrafilosofal.page';

const routes: Routes = [
  {
    path: '',
    component: PedrafilosofalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedrafilosofalPageRoutingModule {}
