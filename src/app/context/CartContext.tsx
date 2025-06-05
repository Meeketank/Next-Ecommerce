"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  brand: string;
  category: string;
};

type CartContextType = {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  addToCart: (product: Product) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart(prev => [...prev, product]);
    alert("Added to cart");
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
