import { Video } from './video.model';

export interface VideoList {
    id: number;
    results: Array<Video>;
};