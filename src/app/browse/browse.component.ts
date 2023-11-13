import { Component } from '@angular/core';
import { MoviesComponent } from '../movies/movies.component';
import { NavbarComponent } from '../navabar/navbar.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [MoviesComponent, NavbarComponent],
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent {

}
