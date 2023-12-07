"use client";
import { usePriceDetails } from "@/hooks/usePriceDetails";
import React from "react";
import AddressForm from "./AddressForm";
import { useProducts } from "@/context/product-context";

const Checkout = () => {
  const { cart } = useProducts();
  const { subTotal, shippingCost, tax, totalPrice } = usePriceDetails(cart);
  return (
    <div className="bg-white">
      <div
        className="fixed left-0 top-0 hidden h-full w-1/2 bg-white lg:block"
        aria-hidden="true"
      />
      <div
        className="fixed right-0 top-0 hidden h-full w-1/2 bg-rose-600 lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 lg:pt-16">
        <section
          aria-labelledby="summary-heading"
          className="bg-rose-600 py-12 text-gray-100 md:px-10 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:bg-transparent lg:px-0 lg:pb-24 lg:pt-0"
        >
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
            <dl>
              <dt className="text-lg font-semibold">Amount due</dt>
              <dd className="mt-1 text-3xl font-bold tracking-tight text-white">
                ₹ 232.00
              </dd>
            </dl>

            <ul
              role="list"
              className="divide-y divide-white divide-opacity-10 text-sm font-medium"
            >
              {cart.map((product) => (
                <li
                  key={product.id}
                  className="flex items-start space-x-4 py-6"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.productName}
                    className="h-24 w-24 flex-none rounded-md object-cover object-center"
                  />
                  <div className="flex-auto space-y-1">
                    <h3 className="text-white text-md">
                      {product.productName}
                    </h3>
                    <p className="text-md font-bold">{product.brand}</p>
                    <p> Quantity : {product.quantity}</p>
                  </div>
                  <p className="flex-none text-base font-medium text-white">
                    ₹ {product.price.toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>

            <dl className="space-y-6 border-t  border-opacity-10 pt-6 text-sm font-medium">
              <div className="flex items-center justify-between">
                <dt>Subtotal</dt>
                <dd>₹ {subTotal.toFixed(2)}</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt>Shipping</dt>
                <dd>₹ {shippingCost.toFixed(2)}</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt>Taxes</dt>
                <dd>₹ {tax.toFixed(2)}</dd>
              </div>

              <div className="flex items-center justify-between border-t  border-opacity-10 pt-6 text-white">
                <dt className="text-lg font-semibold">Total</dt>
                <dd className="text-base">₹ {totalPrice.toFixed(2)}</dd>
              </div>
            </dl>
          </div>
        </section>

        <AddressForm />
      </div>
    </div>
  );
};

export default Checkout;
