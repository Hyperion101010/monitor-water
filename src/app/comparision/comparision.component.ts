import { Component, OnInit } from '@angular/core';
import { single, multi } from '../data';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-comparision',
  templateUrl: './comparision.component.html',
  styleUrls: ['./comparision.component.scss']
})
export class ComparisionComponent implements OnInit {
  NOCid: number;
  tiles: Tile[] = [
    {cols: 2, rows: 1, color: '#fdfdfd'},
    {cols: 2, rows: 3, color: 'white'},
    {cols: 2, rows: 5, color: 'white'},
    {cols: 2, rows: 3, color: 'white'},
  ];

  single: any[];
  multi: any[];

  view: any[] = [600, 400];
  view34: any[] = [300, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Duration';
  showYAxisLabel = true;
  yAxisLabel = 'Consumption';

  colorScheme = {
    domain: ['#5AA154', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  colorScheme1 = {
    domain: ['#5AA154', '#A10A28']
  };

  constructor() { 
    Object.assign(this, { single, multi });
  }

  ngOnInit() {
  }

}
