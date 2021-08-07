import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CreditList } from './../../../../core/models/credit-list.model';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details-credits',
  templateUrl: './movie-details-credits.component.html',
  styleUrls: ['./movie-details-credits.component.scss']
})
export class MovieDetailsCreditsComponent implements OnInit, OnDestroy {
  image_url: string = environment.image_url;
  @Input('credits') credits?: CreditList;
  id: string = "";
  private subs: Subscription[] = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
    })
  };

  navigateToCredits(): void {
    this.router.navigate([`/list/${this.id}/credits`]);
  };

  ngOnDestroy(): void {
    this.subs.forEach((sub) => {
      if(sub) {
        sub.unsubscribe();
      };
    });
  };

}
