import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Reliquiasdamorte1PageRoutingModule } from './reliquiasdamorte1-routing.module';

import { Reliquiasdamorte1Page } from './reliquiasdamorte1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Reliquiasdamorte1PageRoutingModule
  ],
  declarations: [Reliquiasdamorte1Page]
})
export class Reliquiasdamorte1PageModule {}
