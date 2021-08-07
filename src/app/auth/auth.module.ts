import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './pages/auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ErrorsComponent } from '../shared';

@NgModule({
  declarations: [
    AuthComponent,
    ErrorsComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NzButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ErrorsComponent,
    CommonModule,
    AuthRoutingModule,
    NzButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
