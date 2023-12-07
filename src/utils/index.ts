import { IProducts } from "@/types";

export const getSearchProducts = (products: IProducts[], query: string) => {
    const updatedProducts = products?.filter((product) =>
        product.brand.toLowerCase().includes(query.toLowerCase()) || product.productName.toLowerCase().includes(query.toLowerCase()
        ));
    return updatedProducts;
};
export const getSortedProducts = (products: IProducts[], sortBy: string) => {
    console.log(sortBy, 'utils')
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