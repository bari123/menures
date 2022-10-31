import {Component, OnInit} from '@angular/core';
import {DataServiceService} from "../services/data-service.service";
import {MenuModel} from "../models/menuModel";
import { PijetModel} from "../models/pijet.model";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  lang = "AL";
  MenuCategories: MenuModel[] = [];
  MainArticles: PijetModel[]=[];

  constructor(private service: DataServiceService) {
  }

  ngOnInit(): void {
    this.getMenu();
    this.getPijet()
  }

  getMenu() {
    // @ts-ignore
    this.MenuCategories = this.service.getMenus(this.lang)
    console.log(this.MenuCategories)
  }

  getPijet() {
    this.MainArticles = this.service.getPijet(this.lang);
    console.log(this.service.getPijet(this.lang))
  }

}
