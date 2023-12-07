"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import { IProducts } from "@/types";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface IAddress {
  email: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
}
interface IProductContext {
  addProductTOCart: (product: IProducts) => void;
  removeFromCart: (id: number) => void;
  cart: IProducts[];
  setCart: any;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  address: IAddress;
  setAddress: React.Dispatch<React.SetStateAction<IAddress>>;
  addresses: IAddress[];
  setAddresses: React.Dispatch<React.SetStateAction<IAddress[]>>;
  selectedAddress: {} | IAddress;
  setSelectedAddess: Dispatch<SetStateAction<{} | IAddress>>;
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
  address: {
    email: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
  },
  setAddress: () => {},
  addresses: [{ email: "", address: "", city: "", state: "", postalCode: "" }],
  setAddresses: () => {},
  selectedAddress: {},
  setSelectedAddess: () => {},
});

const ProductProvider = ({ children }: IProps) => {
  const [cart, setCart] = useLocalStorage<IProducts[]>("cart", []);
  const [query, setQuery] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState<IAddress>({
    email: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
  });
  const [addresses, setAddresses] = useLocalStorage<IAddress[]>("address", [
    {
      email: "prince@gmail.com",
      address: "Najafgargh",
      city: "New Delhi",
      state: "Delhi",
      postalCode: "110072",
    },
  ]);

  const [selectedAddress, setSelectedAddess] = useState<IAddress | {}>(
    addresses[0]
  );
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
        address,
        setAddress,
        addresses,
        setAddresses,
        selectedAddress,
        setSelectedAddess,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };
