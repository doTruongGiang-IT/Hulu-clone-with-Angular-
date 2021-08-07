import { Subscription } from 'rxjs';
import { CreditService } from './../../../core/services/credit.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResponse, CreditList, MovieDetail, MovieService } from 'src/app/core';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.scss']
})
export class CreditListComponent implements OnInit, OnDestroy {
  movieDetails!: any;
  credits!: any;
  private subs: Array<Subscription> = [];
  id: string = "";
  image_url: string = environment.image_url;

  constructor(private router: Router, private creditService: CreditService, private movieService: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMovieDetails();
    this.loadCreditList();
  };

  loadMovieDetails(): void {
    this.subs.push(
      this.activatedRoute.queryParams.subscribe((params: Params) => {
        this.id = params.id;
      }),
      this.movieService.getDetails(`/movie/${this.id}`, environment.api_key).subscribe((details: ApiResponse<MovieDetail>) => {
        this.movieDetails = details;
      })
    );
  };

  loadCreditList(): void {
    this.subs.push(
      this.creditService.getCreditList(`/movie/${this.id}/credits`, environment.api_key).subscribe((creditList: ApiResponse<CreditList>) => { 
        this.credits = creditList;
      }),
    );
  };

  goToDetails(id: number): void {
    this.router.navigate([`/list/${this.id}/credits/list/${id}`]);
  };

  ngOnDestroy(): void {
    this.subs.forEach(sub => {
      if(sub) {
        sub.unsubscribe();
      }
    });
  };

}
