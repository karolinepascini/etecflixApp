import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Reliquiasdamorte2PageRoutingModule } from './reliquiasdamorte2-routing.module';

import { Reliquiasdamorte2Page } from './reliquiasdamorte2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Reliquiasdamorte2PageRoutingModule
  ],
  declarations: [Reliquiasdamorte2Page]
})
export class Reliquiasdamorte2PageModule {}
