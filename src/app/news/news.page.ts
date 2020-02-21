import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import 'rxjs/Rx';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  public news: any;

// Ionic Slide Left and Right Operations
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(public httpClient: HttpClient) { }

  getData() {
    let url = '/assets/data/newsdata.json';
    let data:Observable<any> = this.httpClient.get(url);
    data.subscribe(result => {
      this.news = result;
    console.log(result);
    }); 
  }

  ngOnInit() { }

}
