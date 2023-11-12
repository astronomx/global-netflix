import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }

  getMovie(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${environment.apiKey}`
      }
    })
  }

  getTrendingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${environment.apiKey}`
      }
    })
  }

  getNowPlayingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2', {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${environment.apiKey}`
      }
    })
  }

  getUpcomingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=4', {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${environment.apiKey}`
      }
    })
  }

  getTopRatedMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2', {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${environment.apiKey}`
      }
    })
  }

  getAiringTodaySeries() {
    return this.http.get('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${environment.apiKey}`
      }
    })
  }

  getPopulairSeries() {
    return this.http.get('https://api.themoviedb.org/3/tv/popular?language=en-US&page=2', {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${environment.apiKey}`
      }
    })
  }

  getBannerMovie() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${environment.apiKey}`
      }
    })
  }
}
