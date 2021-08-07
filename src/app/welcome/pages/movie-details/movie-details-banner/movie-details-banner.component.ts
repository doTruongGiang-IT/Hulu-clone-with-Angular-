import { MovieDetail } from './../../../../core/models/movie-detail.model';
import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details-banner',
  templateUrl: './movie-details-banner.component.html',
  styleUrls: ['./movie-details-banner.component.scss']
})
export class MovieDetailsBannerComponent implements OnInit {
  image_url: string = environment.image_url;
  @Input('movieDetails') movieDetails?: MovieDetail;

  constructor() { }

  ngOnInit(): void {
  };

  addFavorite(id: number): void {
    let arrFavor: Array<number> = [];
    if(window.localStorage["favorites"]) {
      arrFavor = JSON.parse(window.localStorage["favorites"]);
    };
    let index = arrFavor.findIndex((idFav: number) => {
      return id === idFav;
    });
    if(index === -1) {
      arrFavor.push(id);
    };
    localStorage.setItem("favorites", JSON.stringify(arrFavor));
  };

}
