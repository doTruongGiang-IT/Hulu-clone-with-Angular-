import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsMediaComponent } from './movie-details-media.component';

describe('MovieDetailsMediaComponent', () => {
  let component: MovieDetailsMediaComponent;
  let fixture: ComponentFixture<MovieDetailsMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailsMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
