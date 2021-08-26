import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Reliquiasdamorte1Page } from './reliquiasdamorte1.page';

const routes: Routes = [
  {
    path: '',
    component: Reliquiasdamorte1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Reliquiasdamorte1PageRoutingModule {}
