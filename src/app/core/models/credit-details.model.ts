export interface CreditDetails {
    adult: boolean;
    also_known_as: Array<string>;
    biography: string;
    birthday: string | null;
    deathday: string | null;
    gender: number
    homepage: string | null;
    id: number;
    imdb_id: string;
    known_for_department: string;
    name: string;
    place_of_birth: string | null;
    popularity: number;
    profile_path: string | null;
};