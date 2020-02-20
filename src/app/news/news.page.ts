import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { Http } from "@angular/http";
import 'rxjs/Rx';
import * as _ from 'lodash';

interface News {
    image: string;
    headline: string;
    content: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit{

// Ionic Slide Left and Right Operations
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  news$: Observable<News[]>;

  constructor(private http: HttpClient ) { }

  ngOnInit() {
   this.news$ = this.http
          .get<News[]>("/assets/data/newsdata.json")
          .map(data =>_.values(data))
          .do(console.log); 
  }
}
