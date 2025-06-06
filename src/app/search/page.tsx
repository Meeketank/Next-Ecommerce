"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import products from "@/app/data/watches.json"; // your product data JSON
import Link from "next/link";
import Image from "next/image";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get initial query param value
  const initialQuery = searchParams.get("q") || "";

  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    // Filter products live as searchTerm changes
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);

    // Update URL query param without refreshing the page
    const url = new URL(window.location.href);
    if (searchTerm.trim()) {
      url.searchParams.set("q", searchTerm);
    } else {
      url.searchParams.delete("q");
    }
    window.history.replaceState({}, "", url.toString());
  }, [searchTerm]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Search Products</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: 10, width: "100%", maxWidth: 400, marginBottom: 20 }}
        autoFocus
      />

      {filteredProducts.length === 0 && <p>No products found.</p>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        {filteredProducts.map((p) => (
          <Link key={p.id} href={`/pdp/${p.id}`} style={{ width: 200 }}>
            <div style={{ border: "1px solid #ccc", borderRadius: 10, padding: 10 }}>
              <Image src={p.image} alt={p.name} width={180} height={180} />
              <h3>{p.name}</h3>
              <p>${p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
