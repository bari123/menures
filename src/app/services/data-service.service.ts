import {Injectable} from '@angular/core';
import {menutkryesoreAl, menutkryesoreEn, menutkryesoreMk} from "../../data/Menutkryesore";
import {pijet, pijeTeNxehta, pijetPaGaz} from "../../data/Pijet";
import {Schedule} from "../../data/orari"
import {mengjesii} from "../../data/Mengjes";
import {zgare} from "../../data/Zgare";
import {pizza} from "../../data/Pizza";
import {sallatat} from "../../data/Sallata";
import {fastfood} from "../../data/FastFood";
import {ekstra} from "../../data/Ekstra";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() {
  }

  // @ts-ignore
  getMenus(lang) {
    if (lang === "AL") {
      return menutkryesoreAl
    } else if (lang === "MK") {
      return menutkryesoreMk
    } else if (lang === "EN") {
      return menutkryesoreEn
    }
  }

  // @ts-ignore
  getPijet(lang) {
    if (lang === "AL") {
      const pijett = pijet.concat(pijetPaGaz, pijeTeNxehta)
      return pijett
    }
  }

  getSchedule(){
    return Schedule
  }

  getBreakfast(){
  return mengjesii
  }

  getBbq(){
    return zgare
  }

  getPizza(){
    return pizza
  }

  getSalads(){
    return sallatat
  }

  getBurgers(){
    return fastfood
  }

  getExtra(){
    return ekstra
  }
}
