"use client";

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
  addProduct: (product: IProducts) => void;
  isLaoding: boolean;
}

interface IProps {
  children: ReactNode;
}

const ProductContext = createContext<IProductContext>({
  products: [],
  addProduct(products) {},
  isLaoding: false,
});

const ProductProvider = ({ children }: IProps) => {
  const [products, setProducts] = useState([]);
  const [isLaoding, setIsLoading] = useState(false);
  const addProduct = () => {};
  console.log(products);

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
    <ProductContext.Provider value={{ products, addProduct, isLaoding }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };
