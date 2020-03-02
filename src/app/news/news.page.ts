import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})

export class NewsPage  {
// Slide Operation Controller
  slideOpts = {
    initialSlide: 0,
    speed: 400,
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

  loading: any;
  data: any;
  error: string;

  constructor( private http: HttpClient, public loadingController: LoadingController ) { 
    this.data = '';
    this.error = '';
  }

// Ion loading and present view
  async ionViewWillEnter() {
    await this.presentLoading();
    this.prepareDataRequest()
      .pipe(
        finalize(async () => {
          await this.loading.dismiss();
        })
      )
      .subscribe(
        data => {
          this.data = JSON.stringify(data);
        },
        err => {
          this.error = `An error occurred, the data could not be retrieved: Status: ${err.status}, Message: ${err.statusText}`;
        }
      );
  }

  async presentLoading() {                                                                                                                
    this.loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await this.loading.present();
  }

  private prepareDataRequest(): Observable<object> {
    const dataUrl = 'https://madras-daily.herokuapp.com/api/news';
    return this.http.get(dataUrl);
  }

}
