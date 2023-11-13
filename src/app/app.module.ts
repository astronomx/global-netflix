import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navabar/navbar.component';

import { AppRoutingModule } from './app-routing.module';

import { NgIconsModule, provideNgIconsConfig } from '@ng-icons/core';
import { heroMagnifyingGlass, heroBell } from "@ng-icons/heroicons/outline";
import { MoviesComponent } from './movies/movies.component';
import { BrowseComponent } from './browse/browse.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    BrowseComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ heroMagnifyingGlass, heroBell }),
  ],
  providers: [
    provideNgIconsConfig({
      size: '1.5em',
      color: 'white',
    }),
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
