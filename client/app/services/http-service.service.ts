import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private _http: Http) { }

    public sendRequest(options): Promise<any> {
        let url: string;
        let promise = null;

        if (!options.url) {
            return Promise.reject('Url required');
        } else {
            url = options.url;
        }
        const method = options.method || 'GET';
        const body = options.body || {};

        if (method === 'GET') {
            promise = this._http.get(url)
                .toPromise();
        } else if (method === 'POST') {
            promise = this._http
                .post(url, body, { headers: this.headers })
                .toPromise();
        } else if (method === 'PUT') {
            promise = this._http
                .put(url, body, { headers: this.headers })
                .toPromise();
        } else if (method === 'DELETE') {
            promise = this._http.delete(url, { headers: this.headers })
                .toPromise();
        }

        return new Promise((resolve, reject) => {
            promise
                .then((data) => {
                    const json = data && data._body ? JSON.parse(data._body) : {};
                    resolve(json);
                    return null;
                })
                .catch((err) => {
                    const json = err && err._body ? JSON.parse(err._body) : {};
                    reject(err);
                    return err;
                });
        });
    }
}

