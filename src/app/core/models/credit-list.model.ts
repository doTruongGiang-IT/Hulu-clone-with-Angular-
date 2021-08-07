import { Cast } from "./cast.model";
import { Crew } from "./crew.model";

export interface CreditList {
    id: number;
    cast: Array<Cast>;
    crew: Array<Crew>;
}