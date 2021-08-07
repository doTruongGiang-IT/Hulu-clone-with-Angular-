import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  movieTypes: Array<any> = [
    {id: 0, title: "Trending", endpoint: '/trending/all/week', genre: ''},
    {id: 1, title: "Rated", endpoint: '/movie/top_rated', genre: ''},
    {id: 2, title: "Action", endpoint: '/discover/movie', genre: '28'},
    {id: 3, title: "Comedy", endpoint: '/discover/movie', genre: '35'},
    {id: 4, title: "Horror", endpoint: '/discover/movie', genre: '27'},
    {id: 5, title: "Romance", endpoint: '/discover/movie', genre: '10749'},
    {id: 6, title: "Mystery", endpoint: '/discover/movie', genre: '9648'},
    {id: 7, title: "Scifi", endpoint: '/discover/movie', genre: '878'},
    {id: 8, title: "Western", endpoint: '/discover/movie', genre: '37'},
    {id: 9, title: "Animation", endpoint: '/discover/movie', genre: '16'},
    {id: 10, title: "TVs", endpoint: '/discover/movie', genre: '10770'}
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  fetchGenre(index: number): void {
    this.router.navigate(['/list'], { 
      queryParams: { 
        path: this.movieTypes[index].endpoint, 
        genre: this.movieTypes[index].genre 
      }
    });
  };

}
