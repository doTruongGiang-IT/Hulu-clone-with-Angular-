import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CreditList } from 'src/app/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-credit-list-crew',
  templateUrl: './credit-list-crew.component.html',
  styleUrls: ['../credit-list-cast/credit-list-cast.component.scss']
})
export class CreditListCrewComponent implements OnInit, OnDestroy {
  @Input('credits') credits!: CreditList;
  id: string = "";
  image_url: string = environment.image_url;
  private subs: Array<Subscription> = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.subs.push(
      this.activatedRoute.queryParams.subscribe((params: Params) => {
        this.id = params.id;
      }),
    );
  };

  goToDetails(id: number): void {
    this.router.navigate([`/list/${this.id}/credits/list/${id}`]);
  };

  ngOnDestroy():void {
    this.subs.forEach((sub) => {
      if(sub) {
        sub.unsubscribe();
      };
    });
  };

}
