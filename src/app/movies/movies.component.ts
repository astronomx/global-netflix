import { Component } from '@angular/core';
import { MovieApiService } from '../../services/movie-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: []
})
export class MoviesComponent {

  constructor(private MovieService: MovieApiService) { }

  trendingMovies: any[] = [];
  nowPlayingMovies: any[] = [];
  upcomingMovies: any[] = [];

  ngOnInit(): void {
    this.MovieService.getTrendingMovies().subscribe((data: any) => {
      this.trendingMovies = data.results;
    });

    this.MovieService.getNowPlayingMovies().subscribe((data: any) => {
      this.nowPlayingMovies = data.results;
    });

    this.MovieService.getUpcomingMovies().subscribe((data: any) => {
      this.upcomingMovies = data.results;
    });
  }

}
