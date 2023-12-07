/* eslint-disable @next/next/no-img-element */
"use client";

import { useProducts } from "@/context/product-context";
import { StarIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Product = ({ product }: any) => {
  const router = useRouter();
  const { addProductTOCart, cart } = useProducts();
  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className=" flex flex-col ">
      <Link href={`product/${product.id}`} key={product.id}>
        <div className="relative">
          <div className="relative h-72 w-full overflow-hidden rounded-lg">
            <img
              src={product.thumbnail}
              alt=""
              className="h-full w-full object-fill object-center"
            />
          </div>
          <div className="relative mt-4">
            <h3 className="text-md font-medium text-gray-900 line-clamp-1">
              {product.productName}
            </h3>
            <p className="mt-1 text-sm text-gray-500 line-clamp-1">
              {product.brand}
            </p>
          </div>
          <div className="mt-2 flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={classNames(
                  product.rating > rating ? "text-red-500" : "text-gray-200",
                  "h-5 w-5 flex-shrink-0"
                )}
                aria-hidden="true"
              />
            ))}
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
      </Link>
      <div className="mt-6">
        {isInCart ? (
          <button
            className="relative w-full flex items-center justify-center rounded-md border border-red-500 bg-white px-8 py-1.5 text-md  text-red-500 font-semibold"
            onClick={() => router.push("/cart")}
          >
            Go to cart
          </button>
        ) : (
          <button
            className="relative w-full flex items-center justify-center rounded-md border border-transparent bg-red-500 px-8 py-2 text-md font-semibold text-white hover:bg-red-600"
            onClick={() => {
              addProductTOCart(product);
            }}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
