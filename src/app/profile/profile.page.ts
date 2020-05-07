import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from "@angular/fire/database";
import { IonicPage } from "ionic-angular";
import { Profile } from "../shared/profile";
import 'rxjs/add/operator/take';

@IonicPage()
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  profile = {} as Profile;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
  ) { }

  ionViewDidLoad() {
    console.log ('ionViewDidLoad ProfilePage');
  }

  createProfile() {
    this.afAuth.authState.take(1).subscribe(auth => {
          this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
            .then(() => this.router.navigate(['user']));
    })
  }

  
}
