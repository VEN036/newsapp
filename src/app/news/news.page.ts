import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
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
    this.http.get('assets/data/newsdata.json').map((res: Response) => res.json()).subscribe(res => {
          this.data = res.data;
          console.log(this.data);
        },
        (err) => {
          alert('failed loading json data');
        });
  }
}
