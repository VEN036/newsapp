import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Newsdata } from '../model/newsdata';

@Injectable ({
    providedIn: 'root'
})
export class NewsdataService {
    data: any;
    newsdata: any;
    constructor(private http: HttpClient) { }

    getNewsdata(): Observable<any> {
        console.log('getNewsdata');
        return this.http.get('assets/data/newsdata.json').pipe(
            map(results => results['newsdata.json'])
        );
    }
}

