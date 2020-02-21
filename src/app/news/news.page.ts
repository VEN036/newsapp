import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { NewsdataService } from '../service/Newsdata.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  private news = [];
// Ionic Slide Left and Right Operations
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(private newdataService: NewsdataService) { 
    this.newdataService = newdataService;
  }

  ngOnInit() {
    this.newdataService.getNews()
    .subscribe(data => this.news.push(data.news));
  }
}
