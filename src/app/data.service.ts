import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  login(username, password) {
    const  params = new  HttpParams({fromString:  '_page=1&_limit=1'});
    return this.httpClient.request('GET',
      'http://127.0.0.1:8100/login?username=' + username + '&password=' + password, { responseType: 'json', params });
  }
}
