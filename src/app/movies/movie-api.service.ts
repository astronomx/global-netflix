import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${environment.apiKey}`
      }
    })
  }
}
