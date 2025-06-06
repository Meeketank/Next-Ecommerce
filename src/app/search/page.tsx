"use client";

import { useState, useEffect } from "react";
import products from "@/app/data/watches.json"; // your product data JSON
import Link from "next/link";
import Image from "next/image";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Search Products</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: 10,
          width: "100%",
          maxWidth: 400,
          marginBottom: 20,
          fontSize: 16,
        }}
        autoFocus
      />

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            justifyContent: "start",
          }}
        >
          {filteredProducts.map((p) => (
            <Link key={p.id} href={`/pdp/${p.id}`} style={{ width: 200 }}>
              <div
                style={{
                  border: "1px solid #ccc",
                  borderRadius: 10,
                  padding: 10,
                  cursor: "pointer",
                }}
              >
                <Image src={p.image} alt={p.name} width={180} height={180} />
                <h3 style={{ margin: "10px 0 5px" }}>{p.name}</h3>
                <p style={{ margin: 0 }}>${p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
