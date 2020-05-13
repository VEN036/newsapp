import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../services/authentication.service";
import { AlertController } from '@ionic/angular';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private toastController: ToastController, 
    public loadingController: LoadingController,
    public alertController: AlertController
  ) { 
  }

  ngOnInit() { }

  signUp(email, password) {
    this.authService.RegisterUser(email.value, password.value)
    .then(data => {
      console.log(data);
      this.presentToast('புதிய பதிவு வெற்றி பெற்றது', false, 'bottom', 1000);
      this.router.navigate(['profile']);
    }).catch ((error) => {
      this.presentToast('தொடர்ந்து புதிய பதிவைப் பயன்படுத்துவதற்கு சரியான மின்னஞ்சல் முகவரியைக் கொடுங்கள்', false, 'bottom', 1000);
    })
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
