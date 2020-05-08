import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  
  user: any;
  uid: string = '';
  email: string = '';
  displayName: string = '';
  photoURL: string = '';
  error: string;
  userWantsToRegistration: boolean = false;

  constructor(
    private router: Router,
    private toastController: ToastController,
    public loadingController: LoadingController, 
    private fireauth: AngularFireAuth,
    private auth:AuthenticationService
  ) { }

  ionViewDidEnter() {
    this.fireauth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        console.log(this.user);
      }
    })
  }

  wantsToRegistration() {
    this.presentToast('உங்கள் பதிவுக்கு தொடரவும்', false, 'bottom', 1000);
    this.router.navigate(['/registration']);
  }

  logout() {
    this.auth.SignOut().then(data => {
      console.log(data);
      this.presentToast('வெற்றிகரமாக வெளியேறியது', false, 'bottom', 1000);
      this.router.navigate(['/category']);
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
