"use client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import products from "@/app/data/watches.json";
import { use, useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Carousel, { Product } from "@/components/Carousel/carousel";

const btnStyle = {
  backgroundColor: "#006039",
  color: "white",
  padding: "10px 20px",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  fontSize: "1rem"
};

export default function Pdp({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const productId = parseInt(slug);
  const product = products.find((item: Product) => item.id === productId);
  const { addToCart } = useCart();

  if (!product) notFound();

  return (
    <>
      {/* Product Detail Section */}
      <main style={{ display: "flex", flexWrap: "wrap", gap: 50, padding: 50, backgroundColor: "#fafafa" }}>
        <div style={{ flex: 1, minWidth: 300 }}>
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            style={{ borderRadius: 10, objectFit: "cover" }}
          />
        </div>
        <div style={{ flex: 1, minWidth: 300 }}>
          <h1 style={{ fontSize: "2rem", marginBottom: 10 }}>{product.name}</h1>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p style={{ fontWeight: "bold", fontSize: "1.3rem", margin: "20px 0" }}>₹{product.price}</p>
          {/* {product.description && (
            <p style={{ marginBottom: 20 }}>{product.description}</p>
          )} */}
          <div style={{ display: "flex", gap: 20 }}>
            <button style={btnStyle} onClick={() => addToCart(product)}>Add to Cart</button>
            <Link href="/">
              <button style={btnStyle}>Back to Home</button>
            </Link>
          </div>
        </div>
      </main>

      <h2 style={{ textAlign: "center", paddingBottom: 20, paddingTop: 20, borderTop: "5px solid #006039" }}>
        <b>YOU MAY ALSO LIKE</b>
      </h2>
      <Carousel products={products}/>
    </>
  );
}
