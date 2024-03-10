import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Menu';
  Lang = ['AL', 'MK', 'EN']
  lang='AL'


  langChanged(lang:string) {
    localStorage.setItem('lang',lang)
    location.reload()
  }
}

