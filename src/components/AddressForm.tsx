import { useProducts } from "@/context/product-context";
import React from "react";

const AddressForm = () => {
  const { address, setAddress, addresses, setAddresses } = useProducts();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const addNewAddress = () => {
    if (
      !address.email &&
      !address.address &&
      !address.city &&
      !address.state &&
      !address.postalCode &&
      address.postalCode.trim().length !== 6
    )
      return;

    setAddresses([...addresses, address]);
    setAddress({ email: "", address: "", city: "", state: "", postalCode: "" });
  };
  return (
    <form>
      <div className="mx-auto max-w-2xl px-4 ">
        <div>
          <h3
            id="contact-info-heading"
            className="text-lg font-medium text-gray-900"
          >
            Contact information
          </h3>

          <div className="mt-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                value={address.email}
                onChange={handleInputChange}
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
                  required
                  autoComplete="street-address"
                  value={address.address}
                  onChange={handleInputChange}
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
                  value={address.city}
                  onChange={handleInputChange}
                  required
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State / Province
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={address.state}
                  onChange={handleInputChange}
                  required
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="postalCode"
                className="block text-sm font-medium text-gray-700"
              >
                Postal code
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  required
                  id="postalCode"
                  name="postalCode"
                  autoComplete="postalCode"
                  value={address.postalCode}
                  onChange={handleInputChange}
                  max={6}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <button
            className=" text-white rounded-md bg-red-500 mt-8 py-2 px-4"
            onClick={addNewAddress}
          >
            Add new Address
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddressForm;
