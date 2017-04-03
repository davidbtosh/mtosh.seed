﻿import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { TestData } from '../models/testData';

@Injectable()
export class SampleDataService {

    private url: string = 'api/sampleData';

    constructor(private http: Http) { }

    getSampleData(): Observable<TestData> {
        return this.http.get(this.url)
            .map((resp: Response) => resp.json())
            .catch(this.handleError);
    }

    addSampleData(testData: TestData): Observable<TestData> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.url, JSON.stringify(testData), { headers: headers })
            .map((resp: Response) => resp.json())
            .catch(this.handleError);
    }

    // from <a href="https://angular.io/docs/ts/latest/guide/server-communication.html">https://angular.io/docs/ts/latest/guide/server-communication.html</a>
    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}