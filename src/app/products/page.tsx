"use client";
import Image from "next/image";
import Link from "next/link";
import products from "../data/watches.json";
import { useEffect, useState } from "react";
import { useCart } from "@/app/context/CartContext";

export default function Products() {

  const { addToCart } = useCart();

  return (
    <>
    <div style={{ display: "flex", alignItems: "center", padding: 10, justifyContent: "space-between", backgroundColor: "#006039"}}>
          <Image
            src="/next.svg"
            width={80}
            height={80}
            alt="Next.js Logo"
          />

          <nav style={{ display: "flex", gap: 20, color: "beige"}}>
            <Link href="/" >Home</Link>
            {/* <Link href="/">Products</Link> */}
            <Link href="/contact">Contact Us</Link>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 10, color: "beige" }}>
            <input type="text" placeholder="Search..." style={{ padding: 5, borderRadius: 5, border: "1px solid beige" }} />
            <Link href="/cart"><Image src="/window.svg" width={30} height={30} alt="Cart logo" /></Link>
          </div>
        </div>

        <h1 style={{textAlign: "center", padding: 60, borderBottom: "5px solid #006039"}}><b>ALL PRODUCTS</b></h1>
        
        <div style={{ display: "flex", flexWrap: "wrap", gap: 50, justifyContent: "center", padding: 20 }}>
          {products.map((product) => (
            <div key={product.id} style={{ width: 180, border: "1px solid #ccc", borderRadius: 8, padding: 10, textAlign: "center", background: "#f9f9f9" }}>
              <Image src={product.image} width={150} height={150} style={{borderRadius: 10}} alt="Watch" />
              <br/>
              <h3 style={{ fontSize: 16 }}><u>{product.name}</u></h3>
              <p>Price: <b>₹{product.price}</b></p>
              <br/>
              <Link href={`/pdp/${product.id}`}><button style={{color: "beige", backgroundColor: "#006039", paddingLeft: 12, paddingRight: 12, borderRadius: 4}}>Show Details</button></Link>
              <button style={{color: "beige", backgroundColor: "#006039", paddingLeft: 12, paddingRight: 12, borderRadius: 4, marginTop: 10, width: 120}} onClick={() => addToCart(product)}>Add to cart</button>
            </div>
          ))}
        </div>
    </>
    
  );
}