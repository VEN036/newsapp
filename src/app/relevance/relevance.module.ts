import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelevancePageRoutingModule } from './relevance-routing.module';

import { RelevancePage } from './relevance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelevancePageRoutingModule
  ],
  declarations: [RelevancePage]
})
export class RelevancePageModule {}
