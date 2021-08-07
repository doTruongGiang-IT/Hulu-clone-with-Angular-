import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsCreditsComponent } from './movie-details-credits.component';

describe('MovieDetailsCreditsComponent', () => {
  let component: MovieDetailsCreditsComponent;
  let fixture: ComponentFixture<MovieDetailsCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailsCreditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
