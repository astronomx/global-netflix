import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmM4OTJmM2QwODNhOTk4YmE4NzgxNmI2N2E2NjI0NyIsInN1YiI6IjY1NGNiNGRhZDQ2NTM3MDBhYjk0NjU3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vAhOymOLAWhJI_E1BAAFs5EaaX-B-YvNP9PBZ-7duoA'
      }
    })
  }
}
