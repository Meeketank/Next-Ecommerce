"use client";
import { useCart } from "../context/CartContext";
import { toast, Bounce } from "react-toastify";
import CartItems from "@/components/cart/cartitems";
import CartButtons from "@/components/cart/cartbuttons";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const increaseQty = (id: number, currentQty: number) => {
    updateQuantity(id, currentQty + 1);
  };

  const decreaseQty = (id: number, currentQty: number) => {
    if (currentQty === 1) {
      toast.error("Item can't be decreased below 1", {
        className: "custom-toast-error",
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }
    updateQuantity(id, currentQty - 1);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
            <CartItems
              key={item.id}
              item={item}
              quantity={item.quantity}
              increaseQty={() => increaseQty(item.id, item.quantity)}
              decreaseQty={() => decreaseQty(item.id, item.quantity)}
              removeItem={() => removeFromCart(item.id)}
            />
          ))}

          <CartButtons total={total} />
        </>
      )}
    </div>
  );
}
