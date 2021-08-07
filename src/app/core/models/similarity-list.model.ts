import { Similarity } from './similarity.model';

export interface SimilarityList {
    page: number;
    results: Array<Similarity>;
    total_pages: number;
    total_results: number;
}