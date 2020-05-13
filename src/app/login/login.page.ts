import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";
import { AlertController } from '@ionic/angular';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private toastController: ToastController, 
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then( data => {
        console.log(data);
        this.presentToast('உள்நுழைவு வெற்றி பெற்றது', false, 'bottom', 1000);
        this.router.navigate(['category']); 
      }).catch((error) => {
        this.presentToast('சரியான மின்னஞ்சல் முகவரி அல்லது கடவுச்சொல்லை உள்ளிடவும்', false, 'bottom', 1000);
      })
  }

  ForgotPassword() {
    this.router.navigate(['../forgot-password'])
  }
  
  async presentToast(message, show_button, position, duration) {
    const toast = await this.toastController.create({
      message: message,
      showCloseButton: show_button,
      position: position,
      duration: duration
    });
    toast.present();
  }

}
