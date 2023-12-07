/* eslint-disable @next/next/no-img-element */

import { useProducts } from "@/context/product-context";
import { XMarkIcon, CheckIcon, ClockIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

const Cart = ({ product, productIdx }: any) => {
  const { removeFromCart } = useProducts();
  return (
    <li key={product.id} className="flex py-6 sm:py-10">
      <div className="flex-shrink-0">
        <img
          src={product.thumbnail}
          alt="product Image"
          className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            <div className="flex justify-between">
              <h3 className="text-sm">
                <Link
                  href={`/product/${product.id}`}
                  className="font-medium text-gray-700 hover:text-gray-800"
                >
                  {product.productName}
                </Link>
              </h3>
            </div>
            <div className="mt-1 flex text-sm">
              <p className="text-red-500">{product.discountDisplayLabel}</p>
            </div>
            <p className="mt-1 text-sm font-medium text-gray-900">
              ₹ {product.price}
            </p>
          </div>

          <div className="mt-4 sm:mt-0 sm:pr-9">
            <label htmlFor={`quantity-${productIdx}`} className="sr-only">
              Quantity, {product.productName}
            </label>
            <select
              id={`quantity-${productIdx}`}
              name={`quantity-${productIdx}`}
              className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
            </select>

            <div className="absolute right-0 top-0">
              <button
                type="button"
                className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                onClick={() => removeFromCart(product.id)}
              >
                <span className="sr-only">Remove</span>
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <p className="mt-4 flex space-x-2 text-sm text-gray-700">
          {product.inStock ? (
            <CheckIcon
              className="h-5 w-5 flex-shrink-0 text-green-500"
              aria-hidden="true"
            />
          ) : (
            <ClockIcon
              className="h-5 w-5 flex-shrink-0 text-gray-300"
              aria-hidden="true"
            />
          )}

          <span>
            {product.inStock ? "In stock" : `Ships in ${product.deliveryTime}`}
          </span>
        </p>
      </div>
    </li>
  );
};

export default Cart;
