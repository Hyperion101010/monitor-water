import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonitordbService {

  constructor(private http: HttpClient) { }

  submitted(selectedState, selectedCity) {
    return this.http.get('http://localhost:8100/getData/' + selectedState + '/' + selectedCity)
  }

  nocValidity() {
    return this.http.get('http://localhost:8100/nocValidity')
  }

  sendMail(email) {
    return this.http.get('http://localhost:8100/sendMail?to=' + email);
  }

  checkUsageDefaulters(state, city) {
    return this.http.get('http://localhost:8100/checkUsageDefaulters?state=' + state + '&city=' + city);
  }

  nocIndustry(nocid){
    return this.http.get('http://localhost:8100/getNOCIndustry/'+nocid);
  }

  nocIndustryMonthly(nocid){
    return this.http.get('http://localhost:8100/getNOCIndustry/monthly/'+nocid);
  }
}
