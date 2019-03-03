import { Component, OnInit, Input } from '@angular/core';
import { single, multi } from 'src/app/comparision/pie/new_data';
import {  single1 } from '../../data';
import { MonitordbService } from 'src/app/monitordb.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})

export class PieComponent implements OnInit {
@Input() NOCid;

  water_usage : any[];
  multi_usage : any[];

  gradient = false;
  showLegend = true;
  animations = true;

  single: any[];
  multi: any[];
  reuse: any =[];

  view: any[] = [700, 400];

  colorScheme = {
    domain: ['#8A2BE2', '#20B2AA', '#ADFF2F', '#9370DB']
  };

  constructor(private monitordbService : MonitordbService) {
    // Object.assign(this, { single, multi  })
    setInterval(()=>{
      console.log(this.NOCid);
    },1000);
  }


  weeklyWaterUsage(NOCid){
    this.monitordbService.weeklyWaterUsage(NOCid).subscribe((response) => {
      console.log(response);
      this.reuse = response;
    });
  }

  ngOnInit() {
  }

}

