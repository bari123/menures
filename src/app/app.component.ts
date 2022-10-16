import {Component, OnInit} from '@angular/core';
import {menutkryesoreAl, menutkryesoreEn, menutkryesoreMk,} from 'src/data/Menutkryesore';
import {pijet, pijeTeNxehta, pijetPaGaz} from "../data/Pijet";
import {mengjesii} from "../data/Mengjes";
import {sallatat} from "../data/Sallata";
import {fastfood} from "../data/FastFood";
import {zgare} from "../data/Zgare";
import {ekstra} from "../data/Ekstra";
import {pizza} from "../data/Pizza";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Menu';
  lang="al";
  menus: any;
  articles: any;
  articles2: any;
  articles3: any;


  ngOnInit(): void {
    this.getMenus()

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

  getArticles(artikuli:string,lang:string){
    if(artikuli==="Pije"&&lang=="al"){
    this.articles=pijet;
    this.articles2=pijetPaGaz;
    this.articles3=pijeTeNxehta;
    }

    if(artikuli==="Mengjes"&&lang=="al"){
      this.articles=[];
      this.articles2=[];
      this.articles3=[];
      this.articles=mengjesii;
    }

    if(artikuli==="Sallata"&&lang=="al"){
      this.articles=[];
      this.articles2=[];
      this.articles3=[];
      this.articles=sallatat;
    }

    if(artikuli==="Fast Food"&&lang=="al"){
      this.articles=[];
      this.articles2=[];
      this.articles3=[];
      this.articles=fastfood;
    }

    if(artikuli==="Zgare"&&lang=="al"){
      this.articles=[];
      this.articles2=[];
      this.articles3=[];
      this.articles=zgare;
    }

    if(artikuli==="Ushqime"&&lang=="al"){
      this.articles=[];
      this.articles2=[];
      this.articles3=[];
      this.articles=ekstra;
    }
    if(artikuli==="Pizza"&&lang=="al"){
      this.articles=[];
      this.articles2=[];
      this.articles3=[];
      this.articles=pizza;
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
}
