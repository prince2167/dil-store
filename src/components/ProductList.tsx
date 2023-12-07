"use client";

import { useProducts } from "@/context/product-context";
import ProductsHeader from "./ProductsHeader";
import Product from "./card/Product";
import { getSearchProducts, getSortedProducts } from "@/utils";
import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import products from "../data.json";
export default function ProductList() {
  const { query } = useProducts();
  const [sortBy, setSortBy] = useState("");
  const debouncedValue = useDebounce(query, 800);

  const searchedProducts = getSearchProducts(products, debouncedValue);
  const sortedProducts = getSortedProducts(searchedProducts, sortBy);

  return (
    <div className="bg-white">
      <ProductsHeader sortBy={sortBy} setSortBy={setSortBy} />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-4 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {sortedProducts.length > 0 &&
            sortedProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
}
