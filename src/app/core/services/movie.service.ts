import { ApiResponse, MovieDetail, MovieList } from './../models';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private apiService: ApiService) { };

  getList(endpoint: string, key: string, language: string = "en-US", genre: string = ""): Observable<ApiResponse<MovieList>> {
    let params = new HttpParams().set("api_key", key).set("language", language).set("with_genres", genre);
    return this.apiService.get(`${endpoint}`, params);
  }; 

  getDetails(endpoint: string, key: string, language: string = "en-US"): Observable<ApiResponse<MovieDetail>> {
    let params = new HttpParams().set("api_key", key).set("language", language);
    return this.apiService.get(`${endpoint}`, params);
  };
}
