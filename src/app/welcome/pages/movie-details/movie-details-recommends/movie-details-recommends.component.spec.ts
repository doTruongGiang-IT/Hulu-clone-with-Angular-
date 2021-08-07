import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsRecommendsComponent } from './movie-details-recommends.component';

describe('MovieDetailsRecommendsComponent', () => {
  let component: MovieDetailsRecommendsComponent;
  let fixture: ComponentFixture<MovieDetailsRecommendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailsRecommendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsRecommendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
