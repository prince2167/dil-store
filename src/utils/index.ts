import { IProducts } from "@/types";

export const getSearchProducts = (products: IProducts[], query: string) => {
    const updatedProducts = products?.filter((product) =>
        product.brand.toLowerCase().includes(query.toLowerCase()) || product.productName.toLowerCase().includes(query.toLowerCase()
        ));
    return updatedProducts;
};
export const getSortedProducts = (products: IProducts[], sortBy: string) => {

    if (sortBy === "low-to-high") {
        return [...products].sort((a, b) => a.price - b.price);
    }
    if (sortBy === "high-to-low") {
        return [...products].sort((a, b) => b.price - a.price);
    }
    if (sortBy === "popular") {
        return [...products].filter((product) => product.rating > 4 && product.price < 2200);
    }
    if (sortBy === "best-rating") {
        return [...products].sort((a, b) => b.rating - a.rating);
    }
    return products;
};

export const generateRandomString = (): string => {
    const length = 12;
    const alphaChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numericChars = '0123456789';
    let result = '';

    // Generate first two characters as alphabetic
    for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * alphaChars.length);
        result += alphaChars.charAt(randomIndex);
    }

    // Generate remaining characters as alphanumeric
    for (let i = 2; i < length; i++) {
        const characters = i % 2 === 0 ? alphaChars : numericChars;
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}




export const isBrowser = () => typeof window !== 'undefined'