import React from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center ">
          <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <h2 className="text-red-500 text-3xl font-bold">Dils-Store</h2>
              </Link>
            </div>
          </div>

          <div className="max-w-xl flex-1 md:px-8 lg:px-0 xl:col-span-6">
            <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
              <div className="w-full">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-8 items-center ">
            <Link href="/" className="text-lg hover:text-red-500">
              Product
            </Link>
            <Link href="/cart" className="text-lg hover:text-red-500">
              Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
