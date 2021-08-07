import { MovieDetail } from "./movie-detail.model";

export interface Profile {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    token: string;
    favorites: Array<MovieDetail>;
}