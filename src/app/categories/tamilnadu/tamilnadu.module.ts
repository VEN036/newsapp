import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TamilnaduPageRoutingModule } from './tamilnadu-routing.module';

import { TamilnaduPage } from './tamilnadu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TamilnaduPageRoutingModule
  ],
  declarations: [TamilnaduPage]
})
export class TamilnaduPageModule {}
