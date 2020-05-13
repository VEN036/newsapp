import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  constructor(
    private router: Router,
    public navCtrl: NavController,
    private openNatSet: OpenNativeSettings
  ) { }
  
  homeClick() {
    this.router.navigate(['../news']);
  }

   open(setting: string) {
     this.openNatSet.open(setting).then(val => {
       alert(setting);
     }).catch(err =>{
       alert(JSON.stringify(err));
     })
   }
}
