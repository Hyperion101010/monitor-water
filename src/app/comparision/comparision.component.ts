import { Component, OnInit, ViewChild } from '@angular/core';
import { single, multi } from '../data';
import { MonitordbService } from '../monitordb.service';
import { PieComponent } from './pie/pie.component';

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
  @ViewChild(PieComponent) pie: PieComponent;

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
  reuse2: any = [];
  reuse3: any = [];
  reuse4: any = [];
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
  // trimYAxisTicks = true;
  // yScaleMin = 150;
  autoScale = true;
  colorScheme = {
    domain: ['#8A2BE2', '#20B2AA', '#ADFF2F', '#9370DB']
  };

  constructor(private nocService: MonitordbService) {
    Object.assign(this, { single, multi });
  }

  ngOnInit() {
  }

  handleNOCinput(event){
    this.pie.weeklyWaterUsage(this.NOCid);

    this.nocService.nocIndustry(this.NOCid).subscribe((response) => {
      console.log(response);
      this.reuse = response;
    });

    this.nocService.nocIndustryMonthly(this.NOCid).subscribe((response2) => {
      console.log(response2);
      this.reuse2 = response2;
    });

    this.nocService.industryDetail(this.NOCid).subscribe((response2) => {
      console.log(response2);
      this.reuse3 = response2;
    });

    this.nocService.nocIndustryWeekly(this.NOCid).subscribe((response) => {
      console.log(response);
      this.reuse4 = response;
    });


  }

}
