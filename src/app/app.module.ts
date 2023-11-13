import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navabar/navbar.component';

import { AppRoutingModule } from './app-routing.module';

import { MoviesComponent } from './movies/movies.component';
import { BrowseComponent } from './browse/browse.component'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NavbarComponent,
    MoviesComponent,
    BrowseComponent,
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
