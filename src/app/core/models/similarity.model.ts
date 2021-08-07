import { Genre } from './genre.model';

export interface Similarity {
    vote_average: number;
    overview: string;
    release_date: string;
    adult: boolean;
    backdrop_path: string;
    title: string;
    genre_ids: Array<Genre>;
    vote_count: number;
    original_language: string;
    original_title: string;
    poster_path: string;
    id: number;
    video: boolean;
    popularity: number;
};