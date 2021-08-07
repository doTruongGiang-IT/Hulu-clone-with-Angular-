import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsSocialsComponent } from './movie-details-socials.component';

describe('MovieDetailsSocialsComponent', () => {
  let component: MovieDetailsSocialsComponent;
  let fixture: ComponentFixture<MovieDetailsSocialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailsSocialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsSocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
