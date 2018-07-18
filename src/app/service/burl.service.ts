import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class BurlService {
  http: Http;
  urlPrefix: string;
  constructor(http: Http) {
    this.http = http;
    this.urlPrefix = 'http://developpement.multiresto.fr/api/';
  }
  get(url) {
    return this.http.get(this.urlPrefix + url);
  }

  post(url, data) {
    return this.http.post(this.urlPrefix + url, data);
  }
}
