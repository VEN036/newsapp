import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../services/authentication.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private route: ActivatedRoute
  ) { 
  }

  ngOnInit() { }

  signUp(email, password) {
    this.authService.RegisterUser(email.value, password.value)
    .then((res) => {
      this.authService.SendVerificationMail()
      this.router.navigate(['verify-email']);
    }).catch ((error) => {
      window.alert(error.message)
    })
  }

  //doRegistration() {
  //  this.navCtrl.setRoot('MenuPage');
  //}
}
