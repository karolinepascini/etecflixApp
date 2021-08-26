import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalicedefogoPageRoutingModule } from './calicedefogo-routing.module';

import { CalicedefogoPage } from './calicedefogo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalicedefogoPageRoutingModule
  ],
  declarations: [CalicedefogoPage]
})
export class CalicedefogoPageModule {}
