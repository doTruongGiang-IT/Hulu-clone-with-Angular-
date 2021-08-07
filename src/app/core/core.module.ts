import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import {
  ApiService,
  JwtService,
  AuthService
} from './services';
import { AuthGuard } from "./guards";
import { NzMessageModule } from 'ng-zorro-antd/message';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzMessageModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    AuthGuard,
    JwtService,
    AuthService
  ],
})
export class CoreModule { }
