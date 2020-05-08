import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  constructor(
    private router:Router,
    public alertCtrl: AlertController
    ) { }

  async profileClick(){
    const confirm = await this.alertCtrl.create({
      header:'உறுதிப்படுத்தவும்!',
      message: 'உங்கள் சுயவிவரத்தைக் காண நீங்கள் முதலில் பதிவு செய்ய வேண்டும்.',
      buttons: [
        {
          text: 'ரத்துசெய்',
          role: 'cancel',
          handler: () => {
            console.log('ரத்துசெய்வதை உறுதிப்படுத்தவும்');
          }
        },
        {
          text: 'சரி',
          handler: () => {
            console.log('சரி என்பதை உறுதிப்படுத்தவும்');
            this.router.navigate(['../profile']);
          }
        }
      ]
    });
    await confirm.present();
  }

  quit(){
    if (window.confirm("மெட்ராஸ் டெய்லியில் இருந்து வெளியேற விரும்புகிறீர்களா?")) {
      navigator["app"].exitApp();
    }
  }

  login(){
    this.router.navigate(['../login']);
  }

  register(){
    this.router.navigate(['../registration']);
  }

  economics(){
    this.router.navigate(['../../economics']);
  }

  entertainment(){
    this.router.navigate(['../../entertainment']);
  }

  tamilnadu(){
    this.router.navigate(['../../tamilnadu']);
  }

  india(){
    this.router.navigate(['../../india']);
  }

  world(){
    this.router.navigate(['../../world']);
  }

  politics(){
    this.router.navigate(['../../politics']);
  }

  technology(){
    this.router.navigate(['../../technology']);
  }

  agri(){
    this.router.navigate(['../../agriculture']);
  }

  sports(){
    this.router.navigate(['../../sports']);
  }

  ngOnInit() {
  }

}
