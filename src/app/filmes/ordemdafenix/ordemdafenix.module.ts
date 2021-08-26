import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdemdafenixPageRoutingModule } from './ordemdafenix-routing.module';

import { OrdemdafenixPage } from './ordemdafenix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdemdafenixPageRoutingModule
  ],
  declarations: [OrdemdafenixPage]
})
export class OrdemdafenixPageModule {}
