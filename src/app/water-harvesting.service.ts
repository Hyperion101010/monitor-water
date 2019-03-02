import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WaterHarvestingService {

  constructor(private http : HttpClient) { }
  
  harvesting(){
    let obs = this.http.get('http://localhost:8100/getPercentage')
    return obs
  }
}
