import {Injectable} from '@angular/core';
import {menutkryesoreAl, menutkryesoreEn, menutkryesoreMk} from "../../data/Menutkryesore";
import {
  pijet,
  pijetEN,
  pijeTeNxehta,
  pijeTeNxehtaEN,
  pijeTeNxehtaMK,
  pijetMK,
  pijetPaGaz,
  pijetPaGazEN,
  pijetPaGazMk
} from "../../data/Pijet";
import {zgareAL, zgareEN, zgareMK} from "../../data/Zgare";
import {pizzaAL, pizzaEN, pizzaMK} from "../../data/Pizza";
import {sallatatAL, sallatatEN, sallatatMK} from "../../data/Sallata";
import {fastfoodAL, fastfoodEN, fastfoodMK} from "../../data/FastFood";
import {ekstraAL, ekstraEN, ekstraMK} from "../../data/Ekstra";
import {ScheduleAL, ScheduleEN, ScheduleMK} from "../../data/orari";
import {mengjesiAL, mengjesiEN, mengjesiMK} from "../../data/Mengjes";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() {
  }

  getMenus(lang: string | null) {
    switch (lang) {
      case 'AL':
        return menutkryesoreAl;
      case 'MK':
        return menutkryesoreMk;
      case 'EN':
        return menutkryesoreEn;
      default:
        return null;
    }
  }

  getPijet(lang: string | null) {
    switch (lang) {
      case 'AL':
        return pijet.concat(pijetPaGaz, pijeTeNxehta);
      case 'MK':
        return pijetMK.concat(pijetPaGazMk, pijeTeNxehtaMK);
      case 'EN':
        return pijetEN.concat(pijetPaGazEN, pijeTeNxehtaEN);
      default:
        return null;
    }
  }

  getSchedule(lang: string) {
    switch (lang) {
      case 'AL':
        return ScheduleAL;
      case 'MK':
        return ScheduleMK;
      case 'EN':
        return ScheduleEN;
      default:
        return null;
    }
  }

  getBreakfast(lang: string) {
    switch (lang) {
      case 'AL':
        return mengjesiAL;
      case 'MK':
        return mengjesiMK;
      case 'EN':
        return mengjesiEN;
      default:
        return null;
    }
  }

  getBbq(lang: string) {
    switch (lang) {
      case 'AL':
        return zgareAL;
      case 'MK':
        return zgareMK;
      case 'EN':
        return zgareEN;
      default:
        return null;
    }
  }

  getPizza(lang: string) {
    switch (lang) {
      case 'AL':
        return pizzaAL;
      case 'MK':
        return pizzaMK;
      case 'EN':
        return pizzaEN;
      default:
        return null;
    }
  }

  getSalads(lang: string) {
    switch (lang) {
      case 'AL':
        return sallatatAL;
      case 'MK':
        return sallatatMK;
      case 'EN':
        return sallatatEN;
      default:
        return null;
    }
  }

  getBurgers(lang: string) {
    switch (lang) {
      case 'AL':
        return fastfoodAL;
      case 'MK':
        return fastfoodMK;
      case 'EN':
        return fastfoodEN;
      default:
        return null;
    }
  }

  getExtra(lang: string) {
    switch (lang) {
      case 'AL':
        return ekstraAL;
      case 'MK':
        return ekstraMK;
      case 'EN':
        return ekstraEN;
      default:
        return null;
    }
  }
}
