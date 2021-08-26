import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Reliquiasdamorte2Page } from './reliquiasdamorte2.page';

const routes: Routes = [
  {
    path: '',
    component: Reliquiasdamorte2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Reliquiasdamorte2PageRoutingModule {}
