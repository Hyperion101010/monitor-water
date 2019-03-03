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
    domain: ['#8A2BE2', '#20B2AA', '#ADFF2F', '#9370DB']
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

