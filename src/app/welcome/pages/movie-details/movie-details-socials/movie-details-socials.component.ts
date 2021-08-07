import { Component, Input, OnInit } from '@angular/core';
import { SimilarityList } from 'src/app/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details-socials',
  templateUrl: './movie-details-socials.component.html',
  styleUrls: ['./movie-details-socials.component.scss']
})
export class MovieDetailsSocialsComponent implements OnInit {
  @Input('similarities') similarities!: SimilarityList;
  image_url: string = environment.image_url;
  Math = Math;

  constructor() { }

  ngOnInit(): void {
  }

}
