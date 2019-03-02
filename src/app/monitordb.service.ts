import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonitordbService{

  constructor(private http: HttpClient) { }

  submitted(selectedState, selectedCity) {
    return this.http.get('http://localhost:8100/getData/'+selectedState +'/'+selectedCity)
    }

    sendMail(email) {
      return this.http.get('http://localhost:8100/sendMail?to=' + email);
    }
}
