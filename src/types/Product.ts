export interface Product{
    id: number;
    image: string;
    title: string;
    description: string;
    category: string;
    price: number;
    rating: Rating;
}

export interface Rating {
    rate: number;
    count: number
}