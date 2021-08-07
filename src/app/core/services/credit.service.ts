import { CreditImages } from './../models/credit-images.model';
import { HttpParams } from '@angular/common/http';
import { CreditList } from './../models/credit-list.model';
import { ApiResponse } from './../models/api-response.model';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Cast, Crew } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor(private apiService: ApiService) { };

  getCreditList(endpoint: string, key: string, language: string = "en-US"): Observable<ApiResponse<CreditList>> {
    let params = new HttpParams().set("api_key", key).set("language", language);
    return this.apiService.get(`${endpoint}`, params);
  };

  getCreditDetails(endpoint: string, key: string, language: string = "en-US"): Observable<ApiResponse<Cast | Crew>> {
    let params = new HttpParams().set("api_key", key).set("language", language);
    return this.apiService.get(`${endpoint}`, params);
  };

  getImages(endpoint: string, key: string): Observable<ApiResponse<CreditImages>> {
    let params = new HttpParams().set("api_key", key);
    return this.apiService.get(`${endpoint}`, params);
  };
}
