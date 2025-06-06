"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Product } from "@/components/Carousel/carousel";
import { toast, Bounce } from "react-toastify";

type CartItem = Product & { quantity: number };

type CartContextType = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addToCart: (product: Product) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    // Check if product exists before updating state
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // Product exists: increase quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );

      toast.error("Item already in cart, quantity increased", {
        className: 'custom-toast-error',
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      // Product does not exist: add with quantity 1
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);

      toast.success("Item added to cart", {
        className: 'custom-toast-success',
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      });
    }
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
