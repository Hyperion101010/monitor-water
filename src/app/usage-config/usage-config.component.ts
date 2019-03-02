import { Component, OnInit } from '@angular/core';
import { WaterHarvestingService } from '../water-harvesting.service';

export interface UsageConfig {
  alertLimit: any;
  warningLimit: any;
  renewalNoticePeriod: any;
}

@Component({
  selector: 'app-usage-config',
  templateUrl: './usage-config.component.html',
  styleUrls: ['./usage-config.component.scss']
})
export class UsageConfigComponent implements OnInit {

  warningLimit;
  alertLimit;
  usageConfig: UsageConfig = {
    alertLimit: null,
    warningLimit: null,
    renewalNoticePeriod: null
  };

  constructor(private waterHarvestService: WaterHarvestingService) {
    this.waterHarvestService.getUsageConfig().subscribe((response) => {
      console.log('getUsageConfig', response);
      this.usageConfig.alertLimit = response[0].alertLimit;
      this.usageConfig.warningLimit = response[0].warningLimit;
      this.usageConfig.renewalNoticePeriod = response[0].renewalNoticePeriod;
    });
  }

  ngOnInit() {
  }

  saveLimits() {
    this.waterHarvestService.setUsageConfig(this.usageConfig.warningLimit, this.usageConfig.alertLimit).subscribe((response) => {
      console.log('setUsageConfig', response);
    });
  }

}
