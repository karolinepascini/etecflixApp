import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdemdafenixPage } from './ordemdafenix.page';

const routes: Routes = [
  {
    path: '',
    component: OrdemdafenixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdemdafenixPageRoutingModule {}
