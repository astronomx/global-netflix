import { Component } from '@angular/core';
import { MovieApiService } from './movie-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  constructor(private MovieService: MovieApiService) { }

  movies: any[] = []; // Initialize as an empty array

  ngOnInit(): void {
    this.MovieService.getMovies().subscribe((data: any) => {
      this.movies = data.results; // Assign the array from the API response
    });
  }
}
