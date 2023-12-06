export interface IProducts {
    id: number;
    productName: string;
    description: string;
    productId: number;
    quantity: number;
    price: number;
    mrp: number;
    rating: number;
    discountDisplayLabel: string;
    gender: string;
    inStock: boolean;
    fastDelivery: boolean;
    trending: boolean;
    deliveryTime: string;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}