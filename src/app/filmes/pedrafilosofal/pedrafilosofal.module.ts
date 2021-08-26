import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedrafilosofalPageRoutingModule } from './pedrafilosofal-routing.module';

import { PedrafilosofalPage } from './pedrafilosofal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedrafilosofalPageRoutingModule
  ],
  declarations: [PedrafilosofalPage]
})
export class PedrafilosofalPageModule {}
