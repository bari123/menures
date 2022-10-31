import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {EventsComponent} from "./events/events.component";
import {ContactAndLocationComponent} from "./contact-and-location/contact-and-location.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contact-us', component: ContactAndLocationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
