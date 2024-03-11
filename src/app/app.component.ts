import {OnInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Menu';
  Lang = ['AL', 'MK', 'EN']
  lang = 'AL'


  langChanged(lang: string) {
    localStorage.setItem('lang', lang)
    location.reload()
  }

  ngOnInit() {
    this.langChanged(this.lang)
  }
}

