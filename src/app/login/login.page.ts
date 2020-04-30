import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        // if(this.authService.isEmailVerified) {        
        // } else {
        //   window.alert('Email is not verified')
        //   return false;
        // }
        this.router.navigate(['category']); 
      }).catch((error) => {
        window.alert("சரியான மின்னஞ்சல் முகவரி அல்லது கடவுச்சொல்லை உள்ளிடவும்")
      })
  }

  //doLogin() {
  //  this.navCtrl.setRoot('MenuPage')
  //}

}
