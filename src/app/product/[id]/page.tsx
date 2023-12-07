/* eslint-disable @next/next/no-img-element */
"use client";

import { useProducts } from "@/context/product-context";
import { StarIcon } from "@heroicons/react/20/solid";
import {
  CurrencyDollarIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";
import { useParams, useRouter } from "next/navigation";
import products from "../../../data.json";
import classNames from "classnames";
const policies = [
  {
    name: "International delivery",
    icon: GlobeAmericasIcon,
    description: "Get your order in 2 years",
  },
  {
    name: "Loyalty rewards",
    icon: CurrencyDollarIcon,
    description: "Don't look at other tees",
  },
];

export default function Page() {
  const { addProductTOCart, cart } = useProducts();
  const params = useParams();
  const productId = +params.id;
  const router = useRouter();

  const product = products.find((product) => product.id === productId);
  const isInCart = cart.some((item) => item.id === productId);

  if (!product) return null;
  return (
    <div className="bg-white">
      <div className="pb-16 pt-6 sm:pb-24">
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-900">
                  {product?.productName}
                </h1>
                <p className="text-xl font-medium text-gray-900">
                  ₹{product.price}
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <p className="text-sm text-gray-700">
                    {product.rating}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>

                  <div className="ml-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating
                            ? "text-red-500"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <div
                    aria-hidden="true"
                    className="ml-4 text-sm text-gray-300"
                  >
                    ·
                  </div>
                </div>
              </div>
              <>
                {isInCart ? (
                  <button
                    className="mt-8 w-full flex items-center justify-center rounded-md border border-red-500 bg-white px-8 py-3 text-md  text-red-500 font-semibold"
                    onClick={() => router.push("/cart")}
                  >
                    Go to cart
                  </button>
                ) : (
                  <button
                    className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-red-500 px-8 py-3 text-base font-medium text-white hover:bg-red-600 focus:outline-none"
                    onClick={() => addProductTOCart(product)}
                  >
                    Add to cart
                  </button>
                )}
              </>
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
              <h2 className="sr-only">Images</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                {product?.images?.map((image: any) => (
                  <img
                    key={image.url}
                    src={image.url}
                    alt={image.url}
                    width={800}
                    height={800}
                    className={classNames(
                      image.primary
                        ? "lg:col-span-2 lg:row-span-2"
                        : "hidden lg:block",
                      "rounded-lg"
                    )}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 lg:col-span-5">
              {/* Product details */}
              <div className="">
                <h2 className="text-md font-medium text-gray-900">
                  Description
                </h2>

                <div
                  className="prose prose-sm mt-2 text-gray-500"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <div className="mt-4 border-t border-gray-200 pt-8">
                <h2 className="text-sm font-medium text-gray-900">
                  Fabric &amp; Care
                </h2>
              </div>

              {/* Policies */}
              <section aria-labelledby="policies-heading" className="mt-8">
                <h2 id="policies-heading" className="sr-only">
                  Our Policies
                </h2>

                <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {policies.map((policy) => (
                    <div
                      key={policy.name}
                      className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
                    >
                      <dt>
                        <policy.icon
                          className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="mt-4 text-sm font-medium text-gray-900">
                          {policy.name}
                        </span>
                      </dt>
                      <dd className="mt-1 text-sm text-gray-500">
                        {policy.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
