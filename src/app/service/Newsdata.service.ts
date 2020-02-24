import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Newsdata } from '../model/newsdata';

@Injectable ({
    providedIn: 'root'
})
export class NewsdataService {

    private http = "assets/data/newsdata.json"

    constructor( private httpclient: HttpClient ) { }

    public sendGetRequest() {
        return this.httpclient.get(this.http);
    }
}

