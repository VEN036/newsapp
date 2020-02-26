import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { News } from '../model/news';

@Injectable ({
  providedIn: 'root'
})
export class NewsService {

    constructor( private http: Http, private news: News ) { }

    public getNews() :Observable<News> {
      return this.http.get('http://127.0.0.1:8000/api/news/')
      .map((response: Response) => response.json());
    }
}

