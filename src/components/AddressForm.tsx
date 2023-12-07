import React from "react";

const AddressForm = () => {
  return (
    <form>
      <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
        <div>
          <h3
            id="contact-info-heading"
            className="text-lg font-medium text-gray-900"
          >
            Contact information
          </h3>

          <div className="mt-6">
            <label
              htmlFor="email-address"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                type="email"
                id="email-address"
                name="email-address"
                autoComplete="email"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-medium text-gray-900">
            Shipping address
          </h3>

          <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
            <div className="sm:col-span-3">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="address"
                  name="address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="city"
                  name="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="region"
                className="block text-sm font-medium text-gray-700"
              >
                State / Province
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="region"
                  name="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium text-gray-700"
              >
                Postal code
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="postal-code"
                  name="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-medium text-gray-900">
            Billing information
          </h3>

          <div className="mt-6 flex items-center">
            <input
              id="same-as-shipping"
              name="same-as-shipping"
              type="checkbox"
              defaultChecked
              className="h-4 w-4 rounded border-gray-300 text-red-500 focus:ring-red-500"
            />
            <div className="ml-2">
              <label
                htmlFor="same-as-shipping"
                className="text-sm font-medium text-gray-900"
              >
                Same as shipping information
              </label>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-end border-t border-gray-200 pt-6">
          <button
            type="submit"
            className="rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50"
          >
            Pay now
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddressForm;
