/* eslint-disable @next/next/no-img-element */

import { useProducts } from "@/context/product-context";
import { IProducts } from "@/types";
import { XMarkIcon, CheckIcon, ClockIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import Link from "next/link";

const Cart = ({ product }: any) => {
  const { removeFromCart, cart, setCart, quantity, setQuantity } =
    useProducts();

  const incrementQuantity = (id: number) => {
    const updatedCart = cart.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setCart(updatedCart);
  };
  const decrementQuantity = (id: number) => {
    const updatedCart = cart.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setCart(updatedCart);
  };

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

        <div className="  flex gap-6 items-center max-w-[8rem]">
          <button
            type="button"
            className={classNames(
              product.quantity === 1 && "cursor-not-allowed",
              "rounded bg-gray-100 p-2 "
            )}
            onClick={() => decrementQuantity(product.id)}
            disabled={product.quantity === 1}
          >
            <svg
              className="w-3 h-3 text-gray-900 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <span>{product.quantity}</span>
          <button
            type="button"
            className={classNames(
              product.quantity === 5 && "cursor-not-allowed",
              "rounded bg-gray-100 p-2 "
            )}
            disabled={product.quantity === 5}
            onClick={() => incrementQuantity(product.id)}
          >
            <svg
              className="w-3 h-3 text-gray-900 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
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
