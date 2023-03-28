import {Component, OnInit} from '@angular/core';
import {DataServiceService} from "../services/data-service.service";
import {MenuModel} from "../models/menuModel";
import {PijetModel} from "../models/pijet.model";
import {Platform, PlatformModule} from "@angular/cdk/platform";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  lang = "AL";
  MenuCategories: MenuModel[] = [];
  MainArticles: PijetModel[] = [];

  Articles: any;
  item: string;

  constructor(private service: DataServiceService,private pm:Platform) {
  }

  ngOnInit(): void {
    if(this.pm.ANDROID||this.pm.IOS){
    this.Empty();
    this.getMenu()
    }else{


    this.getMenu();
    this.getPijet()
    }
  }

  Empty() {
    this.MainArticles = [];
    this.Articles = [];
  }

  getMenu() {
    this.MenuCategories = this.service.getMenus(this.lang)
  }


  getPijet() {
    this.Empty()
    this.MainArticles = this.service.getPijet(this.lang);
  }

  getBreakfast() {
    this.Empty()
    this.Articles = this.service.getBreakfast();
  }

  getBbq() {
    this.Empty();
    this.Articles = this.service.getBbq();

  }

  getPizza() {
    this.Empty()
    this.Articles = this.service.getPizza();
  }

  getSalads() {
    this.Empty()
    this.Articles = this.service.getSalads();
  }

  getBurgers() {
   this.Empty()
    this.Articles = this.service.getBurgers();
  }

  getExtra() {
   this.Empty()
    this.Articles = this.service.getExtra();
  }

  selectMenu(id: number) {
    if (id == 0) {
      this.getPijet();
    } else if (id == 1) {
      this.getBreakfast()
    } else if (id == 2) {
      this.getSalads()
    } else if (id == 3) {
      this.getBurgers();
    } else if (id == 4) {
      this.getBbq();
    } else if (id == 5) {
      this.getExtra();
    } else if (id == 6) {
      this.getPizza();
    }
  }
}
