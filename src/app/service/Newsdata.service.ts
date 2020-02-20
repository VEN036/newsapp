import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

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

