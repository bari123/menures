import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "../services/data-service.service";
import {ScheduleModel} from "../models/schedule.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Schedule:ScheduleModel[]=[];

  constructor(private service:DataServiceService) { }

  ngOnInit(): void {
  this.getWorkingHours();
  }


  getWorkingHours(){
    this.Schedule = this.service.getSchedule()
  }
}
