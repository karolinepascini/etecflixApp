import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrisioneirodeazcabanPageRoutingModule } from './prisioneirodeazcaban-routing.module';

import { PrisioneirodeazcabanPage } from './prisioneirodeazcaban.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrisioneirodeazcabanPageRoutingModule
  ],
  declarations: [PrisioneirodeazcabanPage]
})
export class PrisioneirodeazcabanPageModule {}
