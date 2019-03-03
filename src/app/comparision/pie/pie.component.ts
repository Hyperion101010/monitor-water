import { Component, OnInit } from '@angular/core';
import { single, multi } from 'src/app/comparision/pie/new_data';
import {  single1} from '../../data';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})

export class PieComponent implements OnInit {

  water_usage : any[];
  multi_usage : any[];

  gradient = false;
  showLegend = true;
  animations = true;

  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single, multi  })
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}

