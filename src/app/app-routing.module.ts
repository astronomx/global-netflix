import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
    { path: '', component: BrowseComponent, title: 'Home - Netflix' },
    { path: 'movie/:id', component: DetailsComponent, title: 'Movie Details' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
