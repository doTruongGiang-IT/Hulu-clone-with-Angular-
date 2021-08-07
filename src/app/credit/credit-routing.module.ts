import { CreditDetailsComponent } from './pages/credit-details/credit-details.component';
import { CreditListComponent } from './pages/credit-list/credit-list.component';
import { CreditComponent } from './pages/credit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'list/:id/credits', 
    component: CreditComponent,
    children: [
        {
            path: 'list',
            component: CreditListComponent
        },
        {
            path: 'list/:id',
            component: CreditDetailsComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditRoutingModule { }