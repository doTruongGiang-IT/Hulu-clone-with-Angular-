import { Review } from "./review.model";

export interface ReviewList {
    id: number;
    page: number;
    results: Array<Review>;
    [key:string]: any;
};