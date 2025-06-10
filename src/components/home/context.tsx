"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import products from '@/app/data/watches.json'

const ContextSection = () => {
  return (
    <section style={{ display: "flex", padding: "40px", backgroundColor: "#f4f4f4", alignItems: "center", justifyContent: "center", gap: "40px" }}>
      <div style={{ flex: 1, maxWidth: "600px" }}>
        <h2 style={{ fontSize: "2rem", color: "#006039", marginBottom: "20px" }}>
          Explore the Watch Collection
        </h2>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#333" }}>
          The watch collection offers a wide range of prestigious, high-precision timepieces,
          from Professional to Classic models to suit any wrist.
        </p>
        <Link href="/products">
          <button style={{ marginTop: "20px", backgroundColor: "#a37e2c", color: "beige", padding: "10px 20px", border: "none", borderRadius: "8px", cursor: "pointer" }}>
            Explore Products
          </button>
        </Link>
      </div>

      <div style={{ flex: 1, position: "relative", width: "100%", height: "400px", borderRadius: "12px", overflow: "hidden" }}>
        <Link href={`/pdp/${products[22]?.id}`}><Image
          src={products[22].image}
          alt="Watch Collection"
          fill
          style={{ objectFit: "cover" }}
        /></Link>
      </div>
    </section>
  );
};

export default ContextSection;
