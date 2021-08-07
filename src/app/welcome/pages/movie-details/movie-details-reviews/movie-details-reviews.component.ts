import { ReviewList } from './../../../../core/models/review-list.model';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Author, Review } from 'src/app/core';

@Component({
  selector: 'app-movie-details-reviews',
  templateUrl: './movie-details-reviews.component.html',
  styleUrls: ['./movie-details-reviews.component.scss']
})
export class MovieDetailsReviewsComponent implements OnInit {
  image_url: string = environment.image_url;
  @Input('reviews')
  reviews!: ReviewList;
  likes = 0;
  dislikes = 0;
  submitting: boolean = false;
  user: Author = {
    name: "Do Truong Giang",
    username: 'Giang Do',
    avatar_path: 'vVGgWZe3bDdy0fsODYDtrL8J51b.jpg',
    rating: null
  };
  inputValue: any = '';
  avatars: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
    this.reviews?.results.forEach((review: Review) => {
      let avatar = review.author_details.avatar_path;
      if(avatar === null) {
        avatar = "https://secure.gravatar.com/avatar";
      }else {
        if(avatar.includes("https://secure.gravatar.com/avatar")) {
          avatar = avatar.substr(1);
        }else {
          avatar = this.image_url+avatar;
        };
      };
      this.avatars.push(avatar);
      if(this.reviews) this.reviews['avatars'] = this.avatars;
    });
  };

  like(): void {
    this.likes = 1;
    this.dislikes = 0;
  };

  dislike(): void {
    this.likes = 0;
    this.dislikes = 1;
  };

  handleSubmit(): void {
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';
    // setTimeout(() => {
    //   this.submitting = false;
    //   this.reviews?.results = [
    //     ...this.reviews?.results,
    //     {
    //       author: this.user.username,
    //       author_details: {...this.user},
    //       content,
    //       created_at: new Date(),
    //       id: 1,
    //       updated_at: new Date(),
    //       url: "",
    //       total_pages: 0,
    //       total_results: 0
    //     }
    //   ].map(e => {
    //     return {...e};
    //   });
    // }, 800);
  };

}
