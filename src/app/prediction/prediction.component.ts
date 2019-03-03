import { Component, OnInit } from '@angular/core';
import { waterExtraction, groudwaterLevel } from '../data';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss']
})
export class PredictionComponent implements OnInit {

  waterExtraction: any[];
  groudwaterLevel: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Year';
  yAxisLabel = 'Water Extracted (meter cube)';
  xAxisLabel1 = 'Day';
  yAxisLabel2 = 'Ground water level (mbgl)';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { waterExtraction, groudwaterLevel });
  }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }

}
