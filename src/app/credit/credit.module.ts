import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditComponent } from './pages/credit.component';
import { CreditListComponent } from './pages/credit-list/credit-list.component';
import { CreditDetailsComponent } from './pages/credit-details/credit-details.component';
import { CreditRoutingModule } from './credit-routing.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { CreditListCastComponent } from './pages/credit-list/credit-list-cast/credit-list-cast.component';
import { CreditListCrewComponent } from './pages/credit-list/credit-list-crew/credit-list-crew.component';



@NgModule({
  declarations: [
    CreditComponent,
    CreditListComponent,
    CreditDetailsComponent,
    CreditListCastComponent,
    CreditListCrewComponent
  ],
  imports: [
    CommonModule,
    CreditRoutingModule,
    NzIconModule,
    NzImageModule
  ],
  exports: [
    CommonModule,
    CreditRoutingModule,
    NzIconModule,
    NzImageModule
  ]
})
export class CreditModule { }
