import {Component, OnInit} from '@angular/core';
import {DataServiceService} from "../services/data-service.service";
import {ScheduleModel} from "../models/schedule.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Schedule: ScheduleModel[] = [];
  isFirstPhotoLoaded: boolean = false
  isSecondPhotoLoaded: boolean = false
  isThirdPhotoLoaded: boolean = false

  constructor(private service: DataServiceService) {
  }

  ngOnInit(): void {
    this.getWorkingHours();
  }


  getWorkingHours() {
    this.Schedule = this.service.getSchedule('AL')
  }

  photoIsLoaded(whichPhoto: number) {
    switch (whichPhoto) {
      case 1:
        this.isFirstPhotoLoaded = true
        break;
      case 2:
        this.isSecondPhotoLoaded = true
        break;
      case 3:
        this.isThirdPhotoLoaded=true
    }
  }
}
