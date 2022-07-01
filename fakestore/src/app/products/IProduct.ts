import { rating } from "./rating";

export interface IProduct{
    id: number;
    title: string;
    price: string;
    description: string;
    category: string;
    image: string;
    rating: rating;
}