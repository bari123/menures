import {Component, OnInit} from '@angular/core';
import {DataServiceService} from "../services/data-service.service";
import {MenuModel} from "../models/menuModel";
import {PijetModel} from "../models/pijet.model";
import {Platform} from "@angular/cdk/platform";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  MenuCategories: MenuModel[] = [];
  MainArticles: PijetModel[] = [];
  Lang='AL'

  Articles: any;

  constructor(private service: DataServiceService,private pm:Platform) {
  }

  ngOnInit(): void {
    this.Lang=localStorage.getItem('lang')
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
    this.MenuCategories = this.service.getMenus(this.Lang)
  }


  getPijet() {
    this.Empty()
    this.MainArticles = this.service.getPijet(this.Lang);
  }

  getBreakfast() {
    this.Empty()
    this.Articles = this.service.getBreakfast(this.Lang);
  }

  getBbq() {
    this.Empty();
    this.Articles = this.service.getBbq(this.Lang);

  }

  getPizza() {
    this.Empty()
    this.Articles = this.service.getPizza(this.Lang);
  }

  getSalads() {
    this.Empty()
    this.Articles = this.service.getSalads(this.Lang);
  }

  getBurgers() {
   this.Empty()
    this.Articles = this.service.getBurgers(this.Lang);
  }

  getExtra() {
   this.Empty()
    this.Articles = this.service.getExtra(this.Lang);
  }

  selectMenu(id: number) {
    switch (id) {
      case 0:
        this.getPijet();
        break;
      case 1:
        this.getBreakfast();
        break;
      case 2:
        this.getSalads();
        break;
      case 3:
        this.getBurgers();
        break;
      case 4:
        this.getBbq();
        break;
      case 5:
        this.getExtra();
        break;
      case 6:
        this.getPizza();
        break;
      default:
        break;
    }
  }
}
