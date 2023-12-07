"use client";

import { useProducts } from "@/context/product-context";
import Link from "next/link";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const { cart } = useProducts();
  return (
    <nav>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center ">
          <Logo />

          <Searchbar />
          <div className="flex gap-8 items-center ">
            <Link href="/" className="text-lg hover:text-red-500">
              Product
            </Link>
            <Link href="/cart" className="text-lg hover:text-red-500">
              Cart
              <span className="text-red-500 text-lg font-bold">
                {cart.length > 0 ? ` (${cart.length})` : null}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
