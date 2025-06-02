"use client";

import Image from "next/image";
import products from "../app/data/watches.json";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <header style={{ color: "beige", backgroundColor: "#006039", padding: 10 }}>
        <h1 style={{ textAlign: "center" }}><b>WELCOME TO THE SITE</b></h1>
      </header>

      <main>
        <div style={{ display: "flex", alignItems: "center", padding: 10, justifyContent: "space-between" }}>
          <Image
            src="/next.svg"
            width={80}
            height={80}
            alt="Next.js Logo"
          />

          <nav style={{ display: "flex", gap: 20 }}>
            <Link href="/" >Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <input type="text" placeholder="Search..." style={{ padding: 5, borderRadius: 5, border: "1px solid gray" }} />
            <Link href= "/cart"><Image src="/window.svg" width={30} height={30} alt="Cart logo"/></Link>
          </div>
        </div>

        <div style={{ position: "relative", width: "100%", height: "400px", marginBottom: 20 }}>
          <Image
            src="/header.png"
            fill
            style={{ objectFit: "cover" }}
            alt="Header"
          />
        </div>
        <h1 style={{textAlign: "center", marginBottom: 20}}><b>NEW ARRIVALS</b></h1>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px", backgroundColor: "#006039" }}>
          
          <div style={{ flex: 2, position: "relative", padding: "20px", borderRadius: "12px" }}>
            <Image src={products[10].image} alt="watch image" fill style={{ objectFit: "cover", borderRadius: "10px" }} />
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ position: "relative", padding: "20px", width: "400px", height: "200px", borderRadius: "12px", marginLeft: 10 }}>
              <Image src={products[10].image} alt="watch image" fill style={{ objectFit: "cover", borderRadius: "10px" }} />
            </div>
            <div style={{ position: "relative", padding: "20px", width: "400px", height: "200px", borderRadius: "12px", marginLeft: 10 }}>
              <Image src={products[10].image} alt="watch image" fill style={{ objectFit: "cover", borderRadius: "10px" }} />
            </div>
          </div>
        </div>
        <h1 style={{textAlign: "center", padding: 20, borderBottom: "5px solid #006039"}}><b>ONGOING OFFERS</b></h1>
        <div style={{ margin: "40px 20px", overflow: "hidden", position: "relative" }}>
          <button onClick={() => setIndex((prev) => (prev - 1 + 3) % 3)} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", padding: "10px 20px", backgroundColor: "#006039", color: "beige", border: "none", borderRadius: "5px", cursor: "pointer", opacity: 0.7, zIndex: 1 }}>&lt;</button>
          <div style={{ display: "flex", transition: "transform 0.5s ease-in-out", transform: `translateX(-${index * 100}%)` }}>
            <div style={{ minWidth: "100%", height: "300px", backgroundColor: "#a37e2c", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "24px", fontWeight: "bold", color: "#fff", borderRadius: "10px" }}>Product Slide 1</div>
            <div style={{ minWidth: "100%", height: "300px", backgroundColor: "	#006039", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "24px", fontWeight: "bold", color: "#fff", borderRadius: "10px" }}>Product Slide 2</div>
            <div style={{ minWidth: "100%", height: "300px", backgroundColor: "	#a37e2c", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "24px", fontWeight: "bold", color: "#fff", borderRadius: "10px" }}>Product Slide 3</div>
          </div>
          <button onClick={() => setIndex((prev) => (prev + 1) % 3)} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", padding: "10px 20px", backgroundColor: "#006039", color: "beige", border: "none", borderRadius: "5px", cursor: "pointer", opacity: 0.7, zIndex: 1 }}>&gt;</button>
        </div>
        <h1 style={{textAlign: "center", padding: 20, borderBottom: "5px solid #006039"}}><b>NEW TRENDING</b></h1>
        <div>
          <br/>
        </div>

        <div>
          <footer style={{backgroundColor: "#006039", textAlign: "center", color: "beige", padding: 20}}><b>Created and Managed by Meeket Tank</b></footer>
        </div>
      </main>
    </>
  );
}