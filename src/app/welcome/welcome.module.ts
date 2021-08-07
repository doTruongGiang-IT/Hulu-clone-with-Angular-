import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { FormatDataPipe } from '../shared';

import { WelcomeComponent } from './pages/welcome.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { AboutComponent } from './pages/about/about.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { MovieItemComponent } from './pages/movie-list/movie-item/movie-item.component';
import { MovieDetailsBannerComponent } from './pages/movie-details/movie-details-banner/movie-details-banner.component';
import { MovieDetailsCreditsComponent } from './pages/movie-details/movie-details-credits/movie-details-credits.component';
import { MovieDetailsReviewsComponent } from './pages/movie-details/movie-details-reviews/movie-details-reviews.component';
import { MovieDetailsMediaComponent } from './pages/movie-details/movie-details-media/movie-details-media.component';
import { MovieDetailsSocialsComponent } from './pages/movie-details/movie-details-socials/movie-details-socials.component';
import { MovieDetailsRecommendsComponent } from './pages/movie-details/movie-details-recommends/movie-details-recommends.component';
import { CollectionItemComponent } from './pages/collection/collection-item/collection-item.component';
// import { ProductListComponent } from './pages/movie-details/product-list/product-list.component';
// import { ProductDetailsComponent } from './pages/movie-details/product-details/product-details.component';
// import { ProductBookmarkComponent } from './pages/movie-details/product-bookmark/product-bookmark.component';


@NgModule({
  imports: [
    WelcomeRoutingModule, 
    CommonModule, 
    NzGridModule, 
    NzIconModule, 
    NzProgressModule, 
    NzButtonModule, 
    NzAvatarModule, 
    NzBadgeModule,
    NzTabsModule,
    NzBackTopModule,
    NzEmptyModule,
    NzImageModule,
    NzListModule,
    NzCommentModule,
    FormsModule,
    NgxYoutubePlayerModule.forRoot()
  ],
  declarations: [
    WelcomeComponent, 
    MovieListComponent, 
    MovieDetailsComponent, 
    AboutComponent, 
    CollectionComponent,
    FormatDataPipe,
    MovieItemComponent,
    MovieDetailsBannerComponent,
    MovieDetailsCreditsComponent,
    MovieDetailsReviewsComponent,
    MovieDetailsMediaComponent,
    MovieDetailsSocialsComponent,
    MovieDetailsRecommendsComponent,
    CollectionItemComponent
  ],
  exports: [
    WelcomeComponent, 
    NzGridModule, 
    NzIconModule, 
    NzProgressModule, 
    NzButtonModule, 
    NzAvatarModule, 
    NzBadgeModule,
    NzTabsModule,
    NzBackTopModule,
    NzEmptyModule,
    NzImageModule,
    NzListModule,
    NzCommentModule,
    FormsModule,
  ]
})
export class WelcomeModule { }
