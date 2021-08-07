import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from './../../../core/services/movie.service';
import { ApiResponse, MovieDetail, Profile } from 'src/app/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit, OnDestroy {
  userLogin!: Profile;
  movieDetails!: any;
  arrMovieDetails: Array<MovieDetail> = [];
  arrFavors: Array<number> = [];
  private subs: Subscription[] = [];
  image_url = environment.image_url;

  constructor(private movieService: MovieService, private router: Router) { 
  };

  ngOnInit(): void {
    this.loadFavors();
  };

  loadFavors() {
    this.userLogin = JSON.parse(window.localStorage["auth"]);
    if(localStorage.getItem("favorites") !== null) {
      this.arrFavors = JSON.parse(window.localStorage["favorites"]);
      this.arrFavors.forEach((id: number) => {
        this.subs.push(
          this.movieService.getDetails(`/movie/${id}`, environment.api_key).subscribe((details: ApiResponse<MovieDetail>) => {
            this.movieDetails = details;
            this.updateUsers(this.movieDetails);
          }),
        );
      });
    };
  };

  updateUsers(movie: MovieDetail) {
    let users = JSON.parse(window.localStorage["users"]);
    let index = users.findIndex((user: Profile) => {
      return user.email === this.userLogin.email;
    });
    if(index !== -1) {
      if(users[index].favorites.length === 0) {
        users[index].favorites.push(movie);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("auth",JSON.stringify(users[index]));
      }else {
        let indexMovie = users[index].favorites.findIndex((item: MovieDetail) => {
          return item.id === movie.id
        });
        if(indexMovie === -1) {
          users[index].favorites.push(movie);
          localStorage.setItem("users", JSON.stringify(users));
          localStorage.setItem("auth",JSON.stringify(users[index]));
        };
      };
    };
  };

  reRender(newFav: string): void {
    if(JSON.stringify(this.userLogin.favorites) !== newFav) this.ngOnInit();
  };

  ngOnDestroy(): void {
    this.subs.forEach((sub) => {
      if(sub) {
        sub.unsubscribe();
      };
    });
  };

}
