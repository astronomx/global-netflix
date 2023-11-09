import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navabar/navbar.component';

import { NgIconsModule, provideNgIconsConfig } from '@ng-icons/core';
import { heroMagnifyingGlass, heroBell } from "@ng-icons/heroicons/outline";
import { MoviesComponent } from './movies/movies.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
