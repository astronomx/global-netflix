import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgHeroiconsModule } from "@dimaslz/ng-heroicons";

import { MovieApiService } from 'src/services/movie-api.service';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  imports: [
    CommonModule,
    NgHeroiconsModule,
    RouterModule,
  ]
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);

  movieDetails: any;
  movieReviews: any;

  constructor(private movieService: MovieApiService) { }


  ngOnInit(): void {
    let getParamId = this.route.snapshot.paramMap.get('id');

    console.log(`Parameter ID: ${getParamId}`);

    this.getTrendingMovies(getParamId);
  }

  getTrendingMovies(id: any) {
    this.movieService.getMovieDetail(id).subscribe((details: any) => {
      this.movieDetails = details;
      console.log(this.movieDetails);
    })
  }

  getMovieReview(id: any) {
    this.movieService.getMovieReview(id).subscribe((reviews: any) => {
      this.movieReviews = reviews;
      console.log(this.movieReviews);
    })
  }

}
