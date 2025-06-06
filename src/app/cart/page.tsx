"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { toast, Bounce } from "react-toastify";
import CartItems from "@/components/cart/cartitems";
import CartButtons from "@/components/cart/cartbuttons";

export default function CartPage() {
  const { cart, setCart } = useCart();
  const [quantities, setQuantities] = useState<{ [id: number]: number }>({});
  let lastAlertTime = 0;

  const increaseQty = (id: number) => {
    setQuantities((q) => ({ ...q, [id]: (q[id] || 1) + 1 }));
  };

  const decreaseQty = (id: number) => {
    const now = Date.now();
    setQuantities((q) => {
      if ((q[id] || 1) === 1) {
        if (now - lastAlertTime > 1000) {
           toast.error("Item cant be increased below 1", {
            className: 'custom-toast-error',
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
          lastAlertTime = now;
        }
        return q;
      }
      return { ...q, [id]: q[id] - 1 };
    });
  };

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
    setQuantities((q) => {
      const newQty = { ...q };
      delete newQty[id];
      return newQty;
    });

    toast.warn("Item removed from cart", {
      className: "custom-toast-warn",
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * (quantities[item.id] || 1),
    0
  );

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginBottom: 20,
          borderBottom: "5px solid #006039",
          padding: 20,
        }}
      >
        <b>YOUR CART</b>
      </h1>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItems key={item.id} item={item} quantity={quantities[item.id] || 1} increaseQty={() => increaseQty(item.id)} decreaseQty={() => decreaseQty(item.id)} removeItem={() => removeItem(item.id)}/>
          ))}

          <CartButtons total = {total}/>
        </>
      )}
    </div>
  );
}
