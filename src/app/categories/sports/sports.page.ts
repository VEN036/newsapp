import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements OnInit {
  slideOpts = {
    speed: 500,
    effect: 'coverflow',
    slidesPerView: 1,
    slideOffsetBefore: 10,
    slideOffsetAftrer: 10,
    direction: 'vertical',
    centeredSlides: true,
    coverflowEffect: {
      rotate: 20,
      streach: 100,
      depth: 100,
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      modifier: 1,
    }
  };

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
        return entry.news_type === 'விளையாட்டு';
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
