import { Movie } from './../../../../core/models/movie.model';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  image_url: string = environment.image_url;
  @Input('movie') movie?:Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
