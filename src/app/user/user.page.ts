import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import { IonicPage } from "ionic-angular";
import { Profile } from "../shared/profile";
import { ToastController } from '@ionic/angular';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { FirebaseObjectObservable } from '@angular/fire/database-deprecated';
import { AuthenticationService } from '../services/authentication.service';
import 'rxjs/add/operator/take';

@IonicPage()
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage {

  profileData: AngularFireObject<Profile>;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    private afDatabase: AngularFireDatabase,
    private authService: AuthenticationService
  ) { }

  ionViewWillLoad() {
    this.afAuth.authState.take(1).subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create ({
          message: `Welcome to User, ${data.email}`,
          duration: 3000
        })
        this.profileData = this.afDatabase.object(`profile/${data.uid}`)
      }
      else {
        this.toast.create({
          message: `Could not find authentication details.`,
          duration: 3000
        })
      }
    })
  }

  logout(){
    this.authService.SignOut()
    .then((res) => {
      this.router.navigate(['category'])
    }, (error) => {
      console.log("Logout error", error);
    });
  }

}
