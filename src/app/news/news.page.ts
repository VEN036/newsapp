import { Component, OnInit } from '@angular/core';
import { NewsdataService } from '../service/Newsdata.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  news = [];

// Ionic Slide Left and Right Operations
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(private newsdataService: NewsdataService) {}

  ngOnInit() {
    this.newsdataService.sendGetRequest().subscribe((data:any[])=> {
      console.log(data);
      this.news = data;
    })
  }
}
