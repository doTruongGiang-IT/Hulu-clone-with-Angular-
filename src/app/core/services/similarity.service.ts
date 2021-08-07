import { HttpParams } from '@angular/common/http';
import { SimilarityList } from './../models/similarity-list.model';
import { ApiResponse } from './../models/api-response.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SimilarityService {

  constructor(private apiService: ApiService) { }

  geSimilarities(endpoint: string, key: string, language: string = "en-US"): Observable<ApiResponse<SimilarityList>> {
    let params = new HttpParams().set("api_key", key).set("language", language);
    return this.apiService.get(`${endpoint}`, params);
  };

  geRecommendations(endpoint: string, key: string, language: string = "en-US"): Observable<ApiResponse<SimilarityList>> {
    let params = new HttpParams().set("api_key", key).set("language", language);
    return this.apiService.get(`${endpoint}`, params);
  };
} 
