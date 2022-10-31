import {Injectable} from '@angular/core';
import {menutkryesoreAl, menutkryesoreEn, menutkryesoreMk} from "../../data/Menutkryesore";
import {pijet, pijeTeNxehta, pijetPaGaz} from "../../data/Pijet";
import {Schedule} from "../../data/orari"

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
}
