import {Component, OnInit} from '@angular/core';
import {DataServiceService} from "../services/data-service.service";
import {MenuModel} from "../models/menuModel";
import {PijetModel} from "../models/pijet.model";
import {BreakfastModel} from "../models/breakfast.model";
import {BarbequeModel} from "../models/barbeque.model";
import {PizzaModel} from "../models/pizza.model";
import {SaladsModel} from "../models/salads.model";
import {SendwichModel} from "../models/sendwich.model";
import {ExtraModel} from "../models/extra.model";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  lang = "AL";
  MenuCategories: MenuModel[] = [];
  MainArticles: PijetModel[] = [];
  Breakfast: BreakfastModel[] = [];
  Bbq: BarbequeModel[] = [];
  Pizza: PizzaModel[] = [];
  Salads: SaladsModel[] = [];
  Burgers: SendwichModel[] = [];
  Extra:ExtraModel[]=[];
  Articles: any;

  constructor(private service: DataServiceService) {
  }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu() {
    this.MenuCategories = this.service.getMenus(this.lang)
    // console.log(this.MenuCategories)
  }

  getPijet() {
    this.MainArticles = this.service.getPijet(this.lang);
  }

  getBreakfast() {
    this.MainArticles = []
    this.Breakfast = this.service.getBreakfast();
  }

  getBbq() {
    this.Articles = [];
    this.Bbq = this.service.getBbq();
    this.Articles = this.Bbq;
  }

  getPizza() {
    this.Articles = [];
    this.Pizza = this.service.getPizza();
    this.Articles = this.Pizza;
  }

  getSalads() {
    this.Articles = [];
    this.Salads = this.service.getSalads();
    this.Articles = this.Salads;
  }

  getBurgers() {
    this.Articles = []
    this.Burgers = this.service.getBurgers();
    this.Articles = this.Burgers;
  }

  getExtra() {
    this.Articles = []
    this.Extra = this.service.getExtra();
    this.Articles = this.Extra;

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
