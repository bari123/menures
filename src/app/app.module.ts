import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {faStar as farStar} from '@fortawesome/free-regular-svg-icons';
import {faStar as fasStar} from '@fortawesome/free-solid-svg-icons';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {GoogleMapsModule, MapMarker} from "@angular/google-maps";
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(library: FaIconLibrary) {
    library.addIcons(fasStar, farStar);
  }
}
