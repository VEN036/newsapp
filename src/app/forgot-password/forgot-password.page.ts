import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {
  email: string = '';
  password: string = '';
  error: string = '';
  username: string = '';
  image: number;
  constructor(
    private fireauth: AngularFireAuth, 
    private router: Router, 
    private toastController: ToastController, 
    public loadingController: LoadingController,
    public alertController: AlertController
    ) {

  }

  async openLoader() {
    const loading = await this.loadingController.create({
      message: 'தயவுசெய்து காத்திருங்கள் ...',
      duration: 2000
    });
    await loading.present();
  }
  async closeLoading() {
    return await this.loadingController.dismiss();
  }

  recover() {
    this.fireauth.auth.sendPasswordResetEmail(this.email)
      .then(data => {
        console.log(data);
        this.presentToast('கடவுச்சொல் மீட்டமைப்பு மின்னஞ்சல் அனுப்பப்பட்டது', false, 'bottom', 1000);
        this.router.navigateByUrl('/login');
      })
      .catch(err => {
        console.log(` failed ${err}`);
        this.error = err.message;
      });
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
