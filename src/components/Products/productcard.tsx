import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import {Product} from "@/components/Carousel/carousel";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <div
      key={product.id}
      style={{
        width: 180,
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 10,
        textAlign: "center",
        background: "#f9f9f9",
      }}
    >
      <Link href={`/pdp/${product.id}`}>
      <Image
        src={product.image}
        width={150}
        height={150}
        style={{ borderRadius: 10 }}
        alt="Watch"
      />
      </Link>
      <br />
      <h3 style={{ fontSize: 16 }}>
        <u>{product.name}</u>
      </h3>
      <p>
        Price: <b>₹{product.price}</b>
      </p>
      <br />
      <Link href={`/pdp/${product.id}`}>
        <button
          style={{
            color: "beige",
            backgroundColor: "#006039",
            paddingLeft: 12,
            paddingRight: 12,
            borderRadius: 4,
          }}
        >
          Show Details
        </button>
      </Link>
      <button
        style={{
          color: "beige",
          backgroundColor: "#006039",
          paddingLeft: 12,
          paddingRight: 12,
          borderRadius: 4,
          marginTop: 10,
          width: 120,
        }}
        onClick={() => addToCart(product)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
