import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NewsPageRoutingModule } from './news-routing.module';
import { NewsPage } from './news.page';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    IonicModule,
    NewsPageRoutingModule
  ],
  declarations: [
    NewsPage
  ],
  entryComponents: [
    NewsPage
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewsPageModule {}

