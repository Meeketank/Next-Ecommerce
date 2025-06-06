"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CartIconGreen, CartIconBeige } from "@/components/Icons/carticons";
import products from "@/app/data/watches.json";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const bgColor = pathname === "/" ? "beige" : "#006039";
  const textColor = pathname === "/" ? "#006039" : "beige";

  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState<typeof products>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFiltered(filteredProducts);
      setShowSuggestions(true);
    } else {
      setFiltered([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: 10,
        justifyContent: "space-between",
        backgroundColor: bgColor,
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Image src="/next.svg" width={80} height={80} alt="Next.js Logo" />

      <nav style={{ display: "flex", gap: 20, color: textColor }}>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>

      <div
        ref={wrapperRef}
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: 10,
          color: textColor,
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => {
            if (filtered.length > 0) setShowSuggestions(true);
          }}
          style={{
            padding: 5,
            borderRadius: 5,
            border: `1px solid ${textColor}`,
            color: textColor,
            backgroundColor: "transparent",
            minWidth: 200,
          }}
          aria-label="Search products"
          autoComplete="off"
        />

        {showSuggestions && filtered.length > 0 && (
          <ul
            style={{
              position: "absolute",
              top: "calc(100% + 4px)",
              left: 0,
              right: 0,
              maxHeight: 200,
              overflowY: "auto",
              backgroundColor: bgColor,
              border: `1px solid ${textColor}`,
              borderRadius: 5,
              listStyle: "none",
              margin: 0,
              padding: 0,
              zIndex: 1100,
              color: textColor,
            }}
          >
            {filtered.map((p) => (
              <li
                key={p.id}
                style={{
                  padding: "8px 12px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
                onClick={() => {
                  router.push(`/pdp/${p.id}`);
                  setShowSuggestions(false);
                  setSearchTerm("");
                }}
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  width={40}
                  height={40}
                  style={{ borderRadius: 4 }}
                />
                <span>{p.name}</span>
              </li>
            ))}
          </ul>
        )}

        <Link href="/cart" aria-label="Cart">
          {pathname === "/" ? <CartIconGreen /> : <CartIconBeige />}
        </Link>
      </div>
    </div>
  );
};

export default Header;
