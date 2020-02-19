import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage {
  data: any;
  newsdata: any;


  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get('http://127.0.0.1:8000/api/news').map((res: Response) => res.json()).subscribe(res => {
          this.data = res.data;
          console.log(this.data);
        },
        /*(err) => {
          alert('failed loading json data');
        }*/);
  }
}
