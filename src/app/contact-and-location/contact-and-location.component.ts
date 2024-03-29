import {Component, OnInit} from '@angular/core';
import {catchError, map, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contact-and-location',
  templateUrl: './contact-and-location.component.html',
  styleUrls: ['./contact-and-location.component.css']
})
export class ContactAndLocationComponent implements OnInit {
  lang='AL'

  constructor(private httpClient: HttpClient) {
    httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyDG8CVwP36hImitGM-EK1UkSJ-LNj8sHsI', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  ngOnInit(): void {
 this.lang= localStorage.getItem('lang')
  }

  callMe() {
    location.href="tel:+38971363974"
  }
}
