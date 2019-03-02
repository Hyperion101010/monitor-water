import { Component, OnInit } from '@angular/core';
import { reuse } from '../data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  reuse: any[];

  view: any[] = [600, 400];

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'State';
    showYAxisLabel = true;
    yAxisLabel = 'Reuse %';
  
    colorScheme = {
      domain: ['#5AA154', '#A10A28', '#C7B42C', '#AAAAAA']
    };
  
  constructor() { 
    Object.assign(this, { reuse });
  }

  ngOnInit() {
  }

}
