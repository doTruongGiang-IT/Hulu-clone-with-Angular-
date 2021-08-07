import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ApiResponse, VideoList } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private apiService: ApiService) { };

  getMedia(endpoint: string, key: string, language: string = "en-US"):Observable<ApiResponse<VideoList>> {
    let params = new HttpParams().set("api_key", key).set("language", language);
    return this.apiService.get(`${endpoint}`, params);
  };
}
