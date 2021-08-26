import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnigmadoprincipePage } from './enigmadoprincipe.page';

const routes: Routes = [
  {
    path: '',
    component: EnigmadoprincipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnigmadoprincipePageRoutingModule {}
