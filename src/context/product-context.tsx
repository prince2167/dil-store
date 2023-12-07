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
  addProductTOCart: (product: IProducts) => void;
  isLaoding: boolean;
}

interface IProps {
  children: ReactNode;
}

const ProductContext = createContext<IProductContext>({
  products: [],
  addProductTOCart(products) {},
  isLaoding: false,
});

const ProductProvider = ({ children }: IProps) => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCArtProducts] = useState<IProducts[]>([]);
  const [isLaoding, setIsLoading] = useState(false);

  const addProductTOCart = (product: IProducts) => {
    setCArtProducts([...product, cartProducts]);
  };
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
    <ProductContext.Provider value={{ products, addProductTOCart, isLaoding }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };
