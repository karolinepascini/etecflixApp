import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnigmadoprincipePageRoutingModule } from './enigmadoprincipe-routing.module';

import { EnigmadoprincipePage } from './enigmadoprincipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnigmadoprincipePageRoutingModule
  ],
  declarations: [EnigmadoprincipePage]
})
export class EnigmadoprincipePageModule {}
