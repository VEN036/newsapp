import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  constructor(private router:Router) { }

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
