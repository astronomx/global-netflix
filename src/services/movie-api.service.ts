import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }

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
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=3', {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${environment.apiKey}`
      }
    })
  }
}
