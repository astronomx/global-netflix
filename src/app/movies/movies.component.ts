import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieApiService } from '../../services/movie-api.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movies.component.html',
  styleUrls: []
})
export class MoviesComponent {

  constructor(private movieService: MovieApiService) { }

  trendingMovies: any[] = [];
  nowPlayingMovies: any[] = [];
  upcomingMovies: any[] = [];
  topRatedMovies: any[] = [];

  airingTodaySeries: any[] = [];
  populairSeries: any[] = [];

  bannerMovie: any;

  ngOnInit(): void {
    this.movieService.getTrendingMovies().subscribe((data: any) => {
      this.trendingMovies = data.results;
    });

    this.movieService.getNowPlayingMovies().subscribe((data: any) => {
      this.nowPlayingMovies = data.results;
    });

    this.movieService.getUpcomingMovies().subscribe((data: any) => {
      this.upcomingMovies = data.results;
    });

    this.movieService.getTopRatedMovies().subscribe((data: any) => {
      this.topRatedMovies = data.results;
    });

    this.movieService.getAiringTodaySeries().subscribe((data: any) => {
      this.airingTodaySeries = data.results;
    });

    this.movieService.getPopulairSeries().subscribe((data: any) => {
      this.populairSeries = data.results;
    });

    this.movieService.getBannerMovie().subscribe((data: any) => {
      if (data.results && data.results.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        this.bannerMovie = data.results[randomIndex];
      }
    });
  }
  
}