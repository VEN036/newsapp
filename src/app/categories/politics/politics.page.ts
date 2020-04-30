import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.page.html',
  styleUrls: ['./politics.page.scss'],
})
export class PoliticsPage implements OnInit {

  public data: Array<any> = [];
  public newsType: Array<any> = [];
  hideMe: boolean = true;

  constructor(public http:Http) { 
    this.news_data();
  }

  singleTap() {
    this.hideMe = !this.hideMe;
    console.log("Single tap operation done")
  }

  news_data(){
    this.http.get('https://madras-daily.herokuapp.com/api/news').map(res => res.json()).subscribe(data => {
    this.data = data.data;
    this.newsType = this.data.filter(function (entry){
        return entry.news_type === 'அரசியல்';
      })
    
      console.log(this.newsType);
    },
      err => {
        console.log("Oops!")
      });
    }


  ngOnInit() {
  }

}
