import { CreditImages } from './../../../core/models/credit-images.model';
import { environment } from './../../../../environments/environment';
import { CreditDetails } from './../../../core/models/credit-details.model';
import { ApiResponse } from './../../../core/models/api-response.model';
import { ActivatedRoute, Params } from '@angular/router';
import { CreditService } from './../../../core/services/credit.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-credit-details',
  templateUrl: './credit-details.component.html',
  styleUrls: ['./credit-details.component.scss']
})
export class CreditDetailsComponent implements OnInit, OnDestroy {
  private subs: Array<Subscription> = [];
  details!: any;
  images!: any;
  id: string = "";
  image_url: string = environment.image_url;

  constructor(private creditService: CreditService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadCreditDetails();
    this.loadImages();
  };

  loadCreditDetails(): void {
    this.subs.push(
      this.activatedRoute.params.subscribe((params: Params) => {
        this.id = params.id;
      }),
      this.creditService.getCreditDetails(`/person/${this.id}`, environment.api_key).subscribe((creditDetails: ApiResponse<CreditDetails>) => {
        this.details = creditDetails;
      })
    );
  };

  loadImages() {
    this.subs.push(
      this.creditService.getImages(`/person/${this.id}/images`, environment.api_key).subscribe((imageList: ApiResponse<CreditImages>) => {
        this.images = imageList;
      })
    );
  };

  ngOnDestroy(): void {
    this.subs.forEach((sub) => {
      if(sub) {
        sub.unsubscribe();
      };
    });
  };

}
