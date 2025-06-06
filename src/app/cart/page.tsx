"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import {toast, Bounce} from 'react-toastify';

export default function CartPage() {
  const { cart, setCart } = useCart();
  const [quantities, setQuantities] = useState<{ [id: number]: number }>({});

  const increaseQty = (id: number) => setQuantities(q => ({ ...q, [id]: (q[id] || 1) + 1 }));
  let lastAlertTime = 0;
const decreaseQty = (id: number) => {
  const now = Date.now();
  setQuantities(q => {
    if ((q[id] || 1) === 1) {
      if (now - lastAlertTime > 1000) {
        alert("Item can't be decreased. Please delete it.");
        lastAlertTime = now;
      }
      return q;
    }
    return { ...q, [id]: q[id] - 1 };
  });
};


const removeItem = (id: number) => {
  setCart(cart.filter(item => item.id !== id));
  setQuantities(q => {
    const newQty = { ...q };
    delete newQty[id];
    return newQty;
  });

  toast.warn("Item removed from cart", {
    className: 'custom-toast-warn',
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

  const total = cart.reduce((sum, item) => sum + (item.price * (quantities[item.id] || 1)), 0);

  return (
    <>

      <div>
        <h1 style={{ textAlign: "center", marginBottom: 20, borderBottom: "5px solid #006039", padding: 20  }}><b>YOUR CART</b></h1>

        {cart.length === 0 ? (
          <p style={{ textAlign: "center" }}>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={`${item.id}-${index}`} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 20px", borderBottom: "1px solid #ddd" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
                  <Image src={item.image} alt={item.name} width={100} height={100} style={{ borderRadius: 10, objectFit: "cover" }} />
                  <div><p style={{ fontWeight: "bold" }}>{item.name}</p></div>
                </div>
                <div style={{ fontWeight: "bold", fontSize: 18 }}>₹{item.price}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, userSelect: "none" }}>
                  <button onClick={() => decreaseQty(item.id)} style={{ width: 30, height: 30, borderRadius: "50%", border: "1px solid #006039", backgroundColor: "white", cursor: "pointer", fontWeight: "bold" }}>-</button>
                  <span style={{ minWidth: 20, textAlign: "center" }}>{quantities[item.id] || 1}</span>
                  <button onClick={() => increaseQty(item.id)} style={{ width: 30, height: 30, borderRadius: "50%", border: "1px solid #006039", backgroundColor: "white", cursor: "pointer", fontWeight: "bold" }}>+</button>
                </div>
                <button onClick={() => removeItem(item.id)} style={{ backgroundColor: "transparent", border: "none", color: "red", cursor: "pointer", fontWeight: "bold", fontSize: 16 }} title="Remove item">×</button>
              </div>
            ))}

            <div style={{ textAlign: "right", marginTop: 30, paddingRight: 20 }}>
              <p style={{ fontSize: 20, fontWeight: "bold" }}>Total: ₹{total}</p>
            </div>

            <div style={{display: "inline"}}>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
              <Link href="/placeorder"><button style={{ backgroundColor: "#a37e2c", color: "beige", margin: 10, padding: 10, borderRadius: 10 }}>Place Order</button></Link>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
              <Link href={"/"}><u>Shop more</u>...</Link>
            </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
