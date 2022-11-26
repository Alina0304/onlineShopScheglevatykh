export interface CardProps {
    id: number
    image_url: string,
    sizes: Array<number>,
    name: string,
    price: string,
    coming_soon: boolean,
    sold: boolean
}