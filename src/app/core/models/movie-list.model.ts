import { Movie } from "./movie.model";

export interface MovieList {
    page: number;
    results: Array<Movie>;
}