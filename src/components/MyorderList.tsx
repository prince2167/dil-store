"use client";

import { useProducts } from "@/context/product-context";
import { generateRandomString } from "@/utils";

export default function MyorderList() {
  const { myOrder } = useProducts();

  const orderId = generateRandomString();
  console.log(myOrder, "order2");
  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Order history
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Check the status of recent orders, manage returns, and discover
              similar products.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
            <div className="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
              <div className="border-b border-t border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border">
                <div className="flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6">
                  <dl className="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
                    <div>
                      <dt className="font-medium text-gray-900">
                        Order number
                      </dt>
                      <dd className="mt-1 text-gray-500">{orderId}</dd>
                    </div>
                    <div className="hidden sm:block">
                      <dt className="font-medium text-gray-900">Date placed</dt>
                      <dd className="mt-1 text-gray-500">
                        <span>{myOrder.purchaseDate}</span>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-900">
                        Total amount
                      </dt>
                      <dd className="mt-1 font-medium text-gray-900">
                        ₹ {myOrder.totalAmount}
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Products */}
                <ul role="list" className="divide-y divide-gray-200">
                  {myOrder?.products?.map((product) => (
                    <li key={product.id} className="p-4 sm:p-6">
                      <div className="flex items-center sm:items-start">
                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:h-40 sm:w-40">
                          <img
                            src={product.thumbnail}
                            alt={product.productName}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="ml-6 flex-1 text-sm">
                          <div className="font-medium text-gray-900 sm:flex sm:justify-between">
                            <h5>{product.productName}</h5>
                            <p className="mt-2 sm:mt-0">₹{product.price}</p>
                          </div>
                          <p className="hidden text-gray-500 sm:mt-2 sm:block">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
