"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import { IProducts } from "@/types";
import axios from "axios";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface IProductContext {
  products: IProducts[];
  addProductTOCart: (product: IProducts) => void;
  removeFromCart: (id: number) => void;
  isLaoding: boolean;
  cart: IProducts[];
}

interface IProps {
  children: ReactNode;
}

const ProductContext = createContext<IProductContext>({
  products: [],
  addProductTOCart(product) {},
  removeFromCart(id) {},
  isLaoding: false,
  cart: [],
});

const ProductProvider = ({ children }: IProps) => {
  const [products, setProducts] = useState([]);
  const [isLaoding, setIsLoading] = useState(false);
  const [cart, setCart] = useLocalStorage<IProducts[]>("cart", []);

  const addProductTOCart = (product: IProducts) => {
    setCart([product, ...cart]);
  };
  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  };

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        "https://ecomm-backend-pc0f.onrender.com/products"
      );
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider
      value={{ products, addProductTOCart, isLaoding, cart, removeFromCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };
