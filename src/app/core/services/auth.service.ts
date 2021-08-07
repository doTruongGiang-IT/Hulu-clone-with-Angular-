import { Router } from '@angular/router';
import { ApiResponse } from './../models/api-response.model';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { AuthToken } from '../models';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()
export class AuthService {
  public isAuthenticated: boolean = false;

  constructor (private apiService: ApiService, private router: Router, private jwtService: JwtService, private message: NzMessageService) {}

  getToken(endpoint: string, key: string): Observable<AuthToken> {
    let params = new HttpParams().set("api_key", key);
    return this.apiService.get(`${endpoint}`, params);
  };

  setAuth(authToken: string): void {
    this.jwtService.saveToken(authToken);
  };

  purgeAuth(): void {
    this.jwtService.destroyToken();
    localStorage.removeItem("auth");
    localStorage.removeItem("favorites");
  };

  signIn(credentials: any, key: string) {
    let users = JSON.parse(window.localStorage["users"]);
    let index = users.findIndex((user: any) => {
      return (user.email === credentials.email && user.password === credentials.password);
    });
    if(index !== -1) {
      this.getToken("/authentication/token/new", key).subscribe((token: AuthToken) => {
        this.setAuth(token.request_token);
        localStorage.setItem("auth", JSON.stringify(users[index]));
      });
      this.message.success("Success");
      return this.router.navigate(["/list"]);
    }else {
      this.message.error("Your email or password is wrong");
      return null;
    };
  };

  signUp(credentials: any, key: string) {
    let users = JSON.parse(window.localStorage["users"]);
    let index = users.findIndex((user: any) => {
      return (user.email === credentials.email);
    });
    if(index === -1) {
      users.push(credentials);
      localStorage.setItem("users", JSON.stringify(users));
      this.getToken("/authentication/token/new", key).subscribe((token: AuthToken) => {
        this.setAuth(token.request_token);
        localStorage.setItem("auth", JSON.stringify(credentials));
      });
      this.message.success("Success");
      return this.router.navigate(["/list"]);
    }else {
      this.message.error("Email already used");
      return null;
    };
  };

}
