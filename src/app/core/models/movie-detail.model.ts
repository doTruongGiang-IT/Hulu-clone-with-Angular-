import { Genre } from "./genre.model";
import { Company } from "./company.model";
import { Country } from "./country.model";
import { Language } from ".";

export interface MovieDetail {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: object | null;
    budget: number;
    genres: Array<Genre>;
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string | null;
    popularity: number;
    poster_path: string | null;
    production_companies: Array<Company>;
    production_countries: Array<Country>;
    spoken_languages: Array<Language>;
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    release_date: string;
    vote_average: number;
    vote_count: number;
}