"use client";

import OrderSummary from "./OrderSummary";
import Cart from "./card/Cart";
import { useProducts } from "@/context/product-context";
import Link from "next/link";

const CartList = () => {
  const { cart } = useProducts();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            {cart.length > 0 ? (
              <ul
                role="list"
                className="divide-y divide-gray-200 border-b border-t border-gray-200"
              >
                {Cart.length > 0 &&
                  cart.map((product) => (
                    <Cart key={product.id} product={product} />
                  ))}
              </ul>
            ) : (
              <div className=" border-t border-gray-200  flex justify-center py-10 text-xl font-semibold text-red-500">
                <Link href="/">Cart is empty, Go back to Home</Link>
              </div>
            )}
          </section>

          {cart.length > 0 && <OrderSummary />}
        </div>
      </div>
    </div>
  );
};

export default CartList;
