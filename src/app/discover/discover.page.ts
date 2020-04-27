import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Routes, RouterModule, Router } from '@angular/router';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  constructor( private route: ActivatedRoute, public router:Router ) { }

  ngOnInit() {
  }

  news() {
    this.router.navigateByUrl('/news');
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  registration() {
    this.router.navigateByUrl('/registration');
  }

  category() {
    this.router.navigateByUrl('/category');
  }

}
