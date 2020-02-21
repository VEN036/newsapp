import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { Newsdata } from '../model/newsdata';

@Injectable ()
export class NewsdataService {

    constructor(private http: Http, private newsdata: Newsdata) { }

    public getNews() :Observable<Newsdata> {
        return this.http.get('assets/data/newsdata.json')
        .map((response: Response) => response.json());
      }
}

