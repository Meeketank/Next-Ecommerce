import React from "react";
import Image from "next/image";
import { Product } from "@/components/Carousel/carousel";

interface CartItemsProps {
  item: Product;
  quantity: number;
  increaseQty: () => void;
  decreaseQty: () => void;
  removeItem: () => void;
}

const CartItems: React.FC<CartItemsProps> = ({
  item,
  quantity,
  increaseQty,
  decreaseQty,
  removeItem,
}) => {
  return (
    <div
      key={item.id}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px 20px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
        <Image
          src={item.image}
          alt={item.name}
          width={100}
          height={100}
          style={{ borderRadius: 10, objectFit: "cover" }}
        />
        <div>
          <p style={{ fontWeight: "bold" }}>{item.name}</p>
          <p style={{ fontSize: 12, color: "#888" }}>{item.brand} - {item.category}</p>
        </div>
      </div>

      <div style={{ fontWeight: "bold", fontSize: 18 }}>₹{item.price}</div>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <button
          onClick={decreaseQty}
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            border: "1px solid #006039",
            backgroundColor: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          -
        </button>
        <span style={{ minWidth: 20, textAlign: "center" }}>{quantity}</span>
        <button
          onClick={increaseQty}
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            border: "1px solid #006039",
            backgroundColor: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          +
        </button>
      </div>

      <button
        onClick={removeItem}
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "red",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: 16,
        }}
        title="Remove item"
      >
        ×
      </button>
    </div>
  );
};

export default CartItems;
