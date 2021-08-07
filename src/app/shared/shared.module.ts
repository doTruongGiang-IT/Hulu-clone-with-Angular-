import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NzGridModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NzGridModule
  ],
})
export class SharedModule { }
