import { Component, OnInit } from '@angular/core';
import { WaterHarvestingService } from '../water-harvesting.service';

export interface UsageConfig {
  criticalLimit: any;
  alertLimit: any;
  warningLimit: any;
  renewalNoticePeriod: any;
  ground_water_depth: any;
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
    criticalLimit: null,
    alertLimit: null,
    warningLimit: null,
    renewalNoticePeriod: null,
    ground_water_depth: null
  };

  constructor(private waterHarvestService: WaterHarvestingService) {
    this.waterHarvestService.getUsageConfig().subscribe((response) => {
      console.log('getUsageConfig', response);
      this.usageConfig.criticalLimit = response[0].criticalLimit;
      this.usageConfig.alertLimit = response[0].alertLimit;
      this.usageConfig.warningLimit = response[0].warningLimit;
      this.usageConfig.renewalNoticePeriod = response[0].renewalNoticePeriod;
      this.usageConfig.ground_water_depth = response[0].ground_water_depth;
    });
  }

  ngOnInit() {
  }

  saveLimits() {
    this.waterHarvestService.setUsageConfig(this.usageConfig.warningLimit, this.usageConfig.alertLimit,
      this.usageConfig.criticalLimit, this.usageConfig.renewalNoticePeriod, this.usageConfig.ground_water_depth)
      .subscribe((response) => {
      console.log('setUsageConfig', response);
    });
  }

}
