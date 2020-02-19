import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable ({
    providedIn: 'root'
})
export class NewsdataService {
    data: any;
    constructor(private http: HttpClient) { }

    getData(): Observable<any> {
        console.log('getData');
        return this.http.get('http://127.0.0.1:8000/api/news').pipe(
            map(results => results['data.json'])
        );
    }
}

