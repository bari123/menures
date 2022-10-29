import {Component, OnInit} from '@angular/core';
import {menutkryesoreAl, menutkryesoreEn, menutkryesoreMk,} from 'src/data/Menutkryesore';
import {pijet, pijeTeNxehta, pijetPaGaz} from "../data/Pijet";
import {mengjesii} from "../data/Mengjes";
import {sallatat} from "../data/Sallata";
import {fastfood} from "../data/FastFood";
import {zgare} from "../data/Zgare";
import {ekstra} from "../data/Ekstra";
import {pizza} from "../data/Pizza";
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


  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyDG8CVwP36hImitGM-EK1UkSJ-LNj8sHsI', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }


  ngOnInit() {
    let x = document.getElementById("myTopnav");
    console.log(x?.classList)
    this.getMenus();
    this.initMap();
  }

  initMap() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      this.MarkerPositions.push(this.center)
      this.MarkerPositions.push(this.resPosition)
      console.log(this.center)
    });

  }


  getMenus() {
    if (this.lang === "al") {
      this.menus = menutkryesoreAl;
    } else if (this.lang === "mk") {
      this.menus = menutkryesoreMk;
    } else if (this.lang === "en") {
      this.menus = menutkryesoreEn;
    }
  }

  getArticles(artikuli
                :
                string, lang
                :
                string
  ) {
    if (artikuli === "Pije" && lang == "al") {
      this.articles = pijet;
      this.articles2 = pijetPaGaz;
      this.articles3 = pijeTeNxehta;
      // @ts-ignore
      var x = document.getElementById("artikell2").style.display = "block";
      // @ts-ignore
      var y = document.getElementById("artikell3").style.display = "block";
    }

    if (artikuli === "Mengjes" && lang == "al") {
      this.articles = [];
      this.articles2 = [];
      this.articles3 = [];
      this.articles = mengjesii;
      this.loseCol();
    }

    if (artikuli === "Sallata" && lang == "al") {
      this.articles = [];
      this.articles2 = [];
      this.articles3 = [];
      this.articles = sallatat;
      this.loseCol();
    }

    if (artikuli === "Fast Food" && lang == "al") {
      this.articles = [];
      this.articles2 = [];
      this.articles3 = [];
      this.articles = fastfood;
      this.loseCol();
    }

    if (artikuli === "Zgare" && lang == "al") {
      this.articles = [];
      this.articles2 = [];
      this.articles3 = [];
      this.articles = zgare;
      this.loseCol();
    }

    if (artikuli === "Ushqime" && lang == "al") {
      this.articles = [];
      this.articles2 = [];
      this.articles3 = [];
      this.articles = ekstra;
      this.loseCol();
    }
    if (artikuli === "Pizza" && lang == "al") {
      this.articles = [];
      this.articles2 = [];
      this.articles3 = [];
      this.articles = pizza;
      this.loseCol();
    }

  }

  alclicked() {
    this.lang = "al";
    this.getMenus();
  }

  mkclicked() {
    this.lang = "mk"
    this.getMenus();
  }

  enclicked() {
    this.lang = "en"
    this.getMenus()
  }

  checkClass() {
    var z = document.getElementById("mySidenav");
    // @ts-ignore
    z.style.width = "370px";
    var b = document.getElementById("main");
    // @ts-ignore
    b.style.marginLeft = "470px";
    var x = document.getElementById("ikona");
    // @ts-ignore
    x.style.visibility = "hidden";
  }

  closeMenu() {
    // @ts-ignore
    var x = document.getElementById("mySidenav").style.width = "0";
    // @ts-ignore
    var y = document.getElementById("main").style.marginLeft = "0";
    // @ts-ignore
    var z = document.getElementById("ikona").style.visibility = "visible"
  }

  loseCol() {
    // @ts-ignore
    var x = document.getElementById("artikell2").style.display = "none";
    // @ts-ignore
    var y = document.getElementById("artikell3").style.display = "none";
  }

  toLocation() {
    this.currentMenu = "Lokacioni"
    this.isMenu = false;
    this.isEvents = false;
    this.isSchedule = false;
    this.isGallery = false;
    this.isLocation = true;
    this.closeMenu();
  }

  toMenu() {
    this.currentMenu = "Menu"
    this.isMenu = true;
    this.isEvents = false;
    this.isSchedule = false;
    this.isGallery = false;
    this.isLocation = false;
    this.closeMenu();
  }

  toEvents() {
    this.currentMenu = "Eventet"
    this.isMenu = false;
    this.isEvents = true;
    this.isSchedule = false;
    this.isGallery = false;
    this.isLocation = false;
    this.closeMenu();
  }

  toGallery() {
    this.currentMenu = "Galleria"
    this.isMenu=false;
    this.isEvents=false;
    this.isSchedule=false;
    this.isGallery=true;
    this.isLocation = false;
    this.closeMenu();
  }

  toSchedule() {
    this.currentMenu = "Orari"
    this.isMenu=false;
    this.isEvents=false;
    this.isSchedule=true;
    this.isGallery=false;
    this.isLocation = false;
    this.closeMenu();
  }


}

