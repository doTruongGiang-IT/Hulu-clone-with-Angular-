import { AuthGuard } from './../core/guards/auth.guard';
import { CollectionComponent } from './pages/collection/collection.component';
import { AboutComponent } from './pages/about/about.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome.component';

const routes: Routes = [
  {
    path: '', 
    component: WelcomeComponent,
    children: [
      {
        path: 'list',
        component: MovieListComponent
      },
      {
        path: 'list/:id',
        component: MovieDetailsComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'collections',
        canActivate: [AuthGuard],
        component: CollectionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
