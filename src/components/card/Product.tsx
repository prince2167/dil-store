/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import React from "react";

const Product = ({ product }: any) => {
  return (
    <div key={product.id}>
      <div className="relative">
        <div className="relative h-72 w-full overflow-hidden rounded-lg">
          <img
            src={product.thumbnail}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="relative mt-4">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-1">
            {product.productName}
          </h3>
          <p className="mt-1 text-sm text-gray-500 line-clamp-1">
            {product.description}
          </p>
        </div>
        <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
          />
          <p className="relative text-lg font-semibold text-white">
            ₹{product.price}
          </p>
        </div>
      </div>
      <div className="mt-6">
        <button className="relative w-full flex items-center justify-center rounded-md border border-transparent bg-red-500 px-8 py-2 text-sm font-medium text-white hover:bg-red-400">
          Add to bag
        </button>
      </div>
    </div>
  );
};

export default Product;
