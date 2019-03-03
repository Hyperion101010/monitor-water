import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WaterHarvestingService {

  constructor(private http: HttpClient) { }

  harvesting() {
    return this.http.get('http://localhost:8100/getPercentage');
  }
  getUsageConfig() {
    return this.http.get('http://localhost:8100/getUsageConfig');
  }
  setUsageConfig(warningLimit, alertLimit, criticalLimit, renewalNoticePeriod, ground_water_depth) {
    return this.http.get('http://localhost:8100/setUsageConfig?warningLimit=' + warningLimit
      + '&alertLimit=' + alertLimit
      + '&criticalLimit=' + criticalLimit
      + '&renewalNoticePeriod=' + renewalNoticePeriod
      + '&ground_water_depth=' + ground_water_depth
    );
  }

  industryDetail(nocid) {
    return this.http.get('http://localhost:8100/getIndustryInfo/' + nocid);
  }
}
