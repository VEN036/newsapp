import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable ({
    providedIn: 'root'
})
export class NewsdataService {

    API_URL = 'http://127.0.0.1:8000/api/news';

    API_KEY = 'base64:TuS95Ygt0N5dbtFzYDHVvFwpB1Wr1EyK3OILR+RDi2c=';

    constructor(private httpclient: HttpClient) { }

    getNews() {
        return this.httpclient.get(`http://127.0`);
    }

}

