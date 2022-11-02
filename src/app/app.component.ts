import {Component, HostListener, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Menu';
  lang = "al";
  isMenu: boolean = true;
  hasClass: boolean = false;
  isShow: boolean;
  topPosToStartShowing = 8;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;


    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  constructor() {
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
    document.getElementById("mySidenav").style.width = "100%"
    document.getElementById("myMain").style.marginLeft = "0px"


  }

  closeMenu() {
    document.getElementById("mySidenav").style.width = "0";

  }

  loseCol() {
    document.getElementById("artikell2").style.display = "none";
    document.getElementById("artikell3").style.display = "none";
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }


}

