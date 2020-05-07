import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  constructor(
    public navCtrl: NavController,
    private openNatSet: OpenNativeSettings
  ) { }

   open(setting: string) {
     this.openNatSet.open(setting).then(val => {
       alert(setting);
     }).catch(err =>{
       alert(JSON.stringify(err));
     })
   }
}
