import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navabar/navbar.component';

import { NgIconsModule, provideNgIconsConfig } from '@ng-icons/core';
import { heroMagnifyingGlass, heroBell } from "@ng-icons/heroicons/outline"


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
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
