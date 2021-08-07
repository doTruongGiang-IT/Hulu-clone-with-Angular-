import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsBannerComponent } from './movie-details-banner.component';

describe('MovieDetailsBannerComponent', () => {
  let component: MovieDetailsBannerComponent;
  let fixture: ComponentFixture<MovieDetailsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailsBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
