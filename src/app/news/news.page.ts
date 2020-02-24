import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  data: any;

// Ionic Slide Left and Right Operations
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor() {}

  ngOnInit() {
    fetch('./assets/data/data.json').then(res => res.json())
    .then(json => {
      this.data = json;
    });
  }
}
