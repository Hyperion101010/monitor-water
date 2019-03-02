import { Component, OnInit } from '@angular/core';
import { single, multi } from '../data';
import { MonitordbService } from '../monitordb.service';

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
  reuse: any = [];
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

  constructor(private nocService: MonitordbService) { 
    Object.assign(this, { single, multi });
    this.nocService.nocIndustry().subscribe((response) => {
      console.log(response);
      this.reuse = response;
    });
  }

  ngOnInit() {
  }

  nocIndustry(){
    
      // for (let state in response) {
      //   console.log(state, response[state]);
      //   this.reuse.push({
      //     name: state,
      //     value: response[state]
      //   });
      // }
      // console.log(this.reuse);
      // this.reuse = [...this.reuse];
   
  }

}
