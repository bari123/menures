import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Menu';
  lang = "al";
  menus: any;
  articles: any;
  articles2: any;
  articles3: any;
  image = '/assets/Images/bggg.jpg';
  isMenu: boolean = true;
  hasClass: boolean = false;
  currentMenu = "";
  isLocation: boolean = false;
  isEvents: boolean = false;
  isGallery: boolean = false;
  isSchedule: boolean = false;
  apiLoaded: Observable<boolean>;
  zoom = 15;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: "hybrid",
    zoomControl: true,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
    scrollwheel: false,
    maxZoom: 20,
    minZoom: 8,
  };
  resPosition = {lat: 41.992389, lng: 20.960636};
  MarkerPositions: google.maps.LatLngLiteral[] = [];





  isShow: boolean;
  topPosToStartShowing = 8;

  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  isPlay: boolean = false;
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }


  @HostListener('window:scroll')
  checkScroll() {

    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;


    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyDG8CVwP36hImitGM-EK1UkSJ-LNj8sHsI', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }


  ngOnInit() {
  }

  alclicked() {
    this.lang = "al";
  }

  mkclicked() {
    this.lang = "mk"
  }

  enclicked() {
    this.lang = "en"
  }

  checkClass() {
    // @ts-ignore
    var w = document.getElementById("mySidenav").style.width="100%"
    // @ts-ignore
    var h = document.getElementById("myMain").style.marginLeft="0px"


  }

  closeMenu() {
    // @ts-ignore
    var x = document.getElementById("mySidenav").style.width = "0";

  }

  loseCol() {
    // @ts-ignore
    var x = document.getElementById("artikell2").style.display = "none";
    // @ts-ignore
    var y = document.getElementById("artikell3").style.display = "none";
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }



}

