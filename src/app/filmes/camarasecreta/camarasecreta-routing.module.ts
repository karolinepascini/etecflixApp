import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamarasecretaPage } from './camarasecreta.page';

const routes: Routes = [
  {
    path: '',
    component: CamarasecretaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamarasecretaPageRoutingModule {}
