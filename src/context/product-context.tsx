"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import { IProducts } from "@/types";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface IProductContext {
  addProductTOCart: (product: IProducts) => void;
  removeFromCart: (id: number) => void;
  cart: IProducts[];
  setCart: any;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

interface IProps {
  children: ReactNode;
}

const ProductContext = createContext<IProductContext>({
  addProductTOCart(product) {},
  removeFromCart(id) {},
  cart: [],
  query: "",
  setQuery: () => {},
  setCart: () => {},
  quantity: 1,
  setQuantity: () => {},
});

const ProductProvider = ({ children }: IProps) => {
  const [cart, setCart] = useLocalStorage<IProducts[]>("cart", []);
  const [query, setQuery] = useState("");
  const [quantity, setQuantity] = useState(1);

  const addProductTOCart = (product: IProducts) => {
    setCart([product, ...cart]);
  };
  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  };

  return (
    <ProductContext.Provider
      value={{
        addProductTOCart,
        cart,
        setCart,
        removeFromCart,
        query,
        setQuery,
        quantity,
        setQuantity,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };
