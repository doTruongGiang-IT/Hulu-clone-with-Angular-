import { Author } from "./author.model";

export interface Review {
    author: string;
    author_details: Author;
    content: string;
    created_at: string;
    id: string;
    updated_at: string;
    url: string;
    total_pages: number;
    total_results: number;
};