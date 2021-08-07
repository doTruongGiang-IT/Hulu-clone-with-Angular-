import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit {
  id!: number | string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
    });
    this.router.navigate([`/list/${this.id}/credits/list`], {
      queryParams: {
        id: this.id     
      }
    });
  }

}
