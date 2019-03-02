import { Component, OnInit } from '@angular/core';
import { WaterHarvestingService } from '../water-harvesting.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  reuse: any[] = [];

  view: any[] = [600, 400];

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'State';
    showYAxisLabel = true;
    yAxisLabel = 'Consumption %';

    colorScheme = {
      domain: ['#5AA154', '#A10A28', '#C7B42C', '#AAAAAA']
    };

  constructor( private waterHarvestService: WaterHarvestingService) {
    this.waterHarvestService.harvesting().subscribe((response) => {
      // console.log(response);
      for (let state in response) {
        console.log(state, response[state]);
        this.reuse.push({
          name: state,
          value: response[state]
        });
      }
      console.log(this.reuse);
      this.reuse = [...this.reuse];
    });
  }

  ngOnInit() {
  }

}
