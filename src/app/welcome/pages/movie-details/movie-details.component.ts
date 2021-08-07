import { SimilarityList } from './../../../core/models/similarity-list.model';
import { SimilarityService } from './../../../core/services/similarity.service';
import { VideoList } from './../../../core/models/video-list.model';
import { Review } from './../../../core/models/review.model';
import { CreditList } from './../../../core/models/credit-list.model';
import { CreditService } from './../../../core/services/credit.service';
import { MovieDetail } from './../../../core/models/movie-detail.model';
import { ApiResponse } from './../../../core/models/api-response.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MovieService } from './../../../core/services/movie.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Subscription } from 'rxjs';
import { Author, MediaService, ReviewList, Video } from 'src/app/core';
import { formatDistance } from 'date-fns';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movieDetails!: any;
  credits!: any;
  reviews!: any;
  medias!: any;
  similarities!: any;
  recommendations!: any;
  Math = Math;
  avatars: Array<string | null> = [];
  id: string = "";
  image_url: string = environment.image_url;
  youTube_url: string = "https://www.youtube.com/watch?v=";
  private subs: Subscription[] = [];
  idYouTubes: Array<string | null> = [];
  version = '...';

  constructor(
    private movieService: MovieService, 
    private creditService: CreditService,
    private mediaService: MediaService, 
    private similarityService: SimilarityService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { };

  ngOnInit(): void {
    this.loadMovieDetails();
    this.loadCredits();
    this.loadReviews();
    this.loadMedia();
    this.loadSimilarities();
    this.loadRecommends();
  };

  loadMovieDetails(): void {
    this.subs.push(
      this.activatedRoute.params.subscribe((params: Params) => {
        this.id = params.id;
      }),
      this.movieService.getDetails(`/movie/${this.id}`, environment.api_key).subscribe((details: ApiResponse<MovieDetail>) => {
        this.movieDetails = details;
      })
    );
  };

  loadCredits(): void {
    this.subs.push(
      this.creditService.getCreditList(`/movie/${this.id}/credits`, environment.api_key).subscribe((creditList: ApiResponse<CreditList>) => { 
        this.credits = creditList;
      }),
    );
  };

  loadReviews(): void {
    this.subs.push(
      this.creditService.getCreditList(`/movie/${this.id}/reviews`, environment.api_key).subscribe((reviewList: ApiResponse<ReviewList>) => { 
        this.reviews = reviewList;
      }),
    );
  };

  loadMedia(): void {
    this.subs.push(
      this.mediaService.getMedia(`/movie/${this.id}/videos`, environment.api_key).subscribe((mediaList: ApiResponse<VideoList>) => {
        this.medias = mediaList;
        this.medias.results.forEach((media: Video) => {
          this.idYouTubes.push(media.key);
          this.medias.keys = this.idYouTubes;
        });
      })
    );
  };

  loadSimilarities(): void {
    this.subs.push(
      this.similarityService.geSimilarities(`/movie/${this.id}/similar`, environment.api_key).subscribe((similarityList: ApiResponse<SimilarityList>) => {
        this.similarities = similarityList;
      }),
    );
  };

  loadRecommends(): void {
    this.subs.push(
      this.similarityService.geRecommendations(`/movie/${this.id}/recommendations`, environment.api_key).subscribe((recommendList: ApiResponse<SimilarityList>) => {
        this.recommendations = recommendList;
      }),
    );
  };

  ngOnDestroy(): void {
    this.subs.forEach(sub => {
      if(sub) {
        sub.unsubscribe();
      }
    });
  };

}

