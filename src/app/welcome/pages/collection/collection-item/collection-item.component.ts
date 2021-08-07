import { Router } from '@angular/router';
import { MovieDetail } from './../../../../core/models/movie-detail.model';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Profile } from 'src/app/core';
import { environment } from 'src/environments/environment';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss']
})
export class CollectionItemComponent implements OnInit {
  @Input('movieDetails') movieDetails!: MovieDetail;
  @Output() valueChange: EventEmitter<string> = new EventEmitter();
  userLogin!: Profile;
  image_url = environment.image_url;
  arrFavors: Array<number> = [];
  size: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  };

  onResize(event: any): void {
    this.size = event.target.innerWidth;
  };

  removeFavor(id: number): void {
    this.userLogin = JSON.parse(window.localStorage["auth"]);
    this.arrFavors = JSON.parse(window.localStorage["favorites"]);
    let indexFav = this.arrFavors.findIndex((item) => id === item);
    if(indexFav !== -1) this.arrFavors.splice(indexFav, 1);
    localStorage.setItem("favorites", JSON.stringify(this.arrFavors));
    let index = this.userLogin.favorites.findIndex((movieDetails: MovieDetail) => {
      return id === movieDetails.id;
    });
    if(index !== -1) {
      this.userLogin.favorites.splice(index, 1);
      localStorage.setItem("auth", JSON.stringify(this.userLogin));
      let users = JSON.parse(window.localStorage["users"]);
      let indexUser = users.findIndex((user: Profile) => {
        return user.email === this.userLogin.email;
      });
      if(indexUser !== -1) {
        users[indexUser] = this.userLogin;
        localStorage.setItem("users", JSON.stringify(users));
      };
      let newFav = JSON.stringify(this.userLogin.favorites);
      this.valueChange.emit(newFav);
    };
  };

  showDetails(id: number) {
    this.router.navigate([`/list/${id}`]);
  };

}
