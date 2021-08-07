import { Component, Input, OnInit } from '@angular/core';
import { SimilarityList } from 'src/app/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details-recommends',
  templateUrl: './movie-details-recommends.component.html',
  // styleUrls: ['./movie-details-recommends.component.scss'],
  styleUrls: ['../movie-details-socials/movie-details-socials.component.scss'],
})
export class MovieDetailsRecommendsComponent implements OnInit {
  @Input('recommendations') recommendations!: SimilarityList;
  Math = Math;
  image_url: string = environment.image_url;

  constructor() { }

  ngOnInit(): void {
  }

}
