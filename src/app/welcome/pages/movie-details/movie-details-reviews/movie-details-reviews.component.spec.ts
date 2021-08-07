import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsReviewsComponent } from './movie-details-reviews.component';

describe('MovieDetailsReviewsComponent', () => {
  let component: MovieDetailsReviewsComponent;
  let fixture: ComponentFixture<MovieDetailsReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailsReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
