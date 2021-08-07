import { ApiResponse } from './../../../core/models/api-response.model';
import { MovieList } from './../../../core/models/movie-list.model';
import { MovieService } from './../../../core/services/movie.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies!: any;
  private subs: Subscription[] = [];

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {
    this.subs.push(
      this.activatedRoute.queryParams.subscribe((params: Params) => {
        this.ngOnInit();
      })
    );
  };

  ngOnInit(): void {
    this.subs.push(
      this.activatedRoute.queryParams.subscribe((params: Params) => {
        let path = params.path;
        let genre = params.genre;
        this.loadMovieList(path, genre);
      }),
    );
  };

  loadMovieList(path: string = "/trending/all/week", genre?: string): void {
    this.subs.push(
      this.movieService.getList(path, environment.api_key, "en-US", genre).subscribe((movieList: ApiResponse<MovieList>) => {
        this.movies = movieList;
      }),
    );
  };

  ngOnDestroy(): void {
    this.subs.forEach((sub) => {
      if(sub) {
        sub.unsubscribe();
      }
    });
  };
}
