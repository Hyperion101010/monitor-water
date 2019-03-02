import { Component, OnInit } from '@angular/core';
import {  WaterHarvestingService } from '../water-harvesting.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private waterHarvestService : WaterHarvestingService){
    this.waterHarvestService.harvesting().subscribe((response) => {
      console.log(response);
    })
  }

  ngOnInit() {
  }

}
