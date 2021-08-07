import { Params, Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CreditList } from 'src/app/core';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-credit-list-cast',
  templateUrl: './credit-list-cast.component.html',
  styleUrls: ['./credit-list-cast.component.scss']
})
export class CreditListCastComponent implements OnInit, OnDestroy {
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

  ngOnDestroy(): void {
    this.subs.forEach((sub) => {
      if(sub) {
        sub.unsubscribe();
      };
    });
  };

}
