import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService, Profile } from 'src/app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  userLogin!: Profile;

  constructor(private authService: AuthService) { };

  ngOnInit(): void {};

  loadAuth() {
    if(localStorage.getItem("auth")) {
      this.userLogin = JSON.parse(window.localStorage["auth"]);
    }else {
      this.userLogin = {firstName: "", lastName: "", email: "", password: "", token: "", favorites: []};
    };
  };

  logout() {
    this.authService.purgeAuth();
  };

  ngDoCheck(): void {
    this.loadAuth();
  };

}
