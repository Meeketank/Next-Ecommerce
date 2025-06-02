"use client";

import Image from "next/image";
import products from "../app/data/watches.json";
import Link from "next/link";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

function Carousel({ products }) {
  const [index, setIndex] = useState(0);
  const itemsPerSlide = 3;

  const next = () => {
    if ((index + 1) * itemsPerSlide < products.length) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const visibleItems = products.slice(index * itemsPerSlide, (index + 1) * itemsPerSlide);

  return (
    <div style={{ position: "relative", padding: 20, display: "flex", alignItems: "center", justifyContent: "center", gap: 20 }}>
      <button onClick={prev} style={{ fontSize: 24 }}>&lt;</button>
      {visibleItems.map((p: { image: string | StaticImport; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; price: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, i: Key | null | undefined) => (
        <div key={i} style={{ textAlign: "center", backgroundColor: "#f0f0f0", padding: 10, borderRadius: 8 }}>
          <Image src={p.image} width={400} height={400} alt="product" />
          <h4>{p.name}</h4>
          <p>{p.price}</p>
        </div>
      ))}
      <button onClick={next} style={{ fontSize: 24 }}>&gt;</button>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header style={{ color: "beige", backgroundColor: "#006039", padding: 10 }}>
        <h1 style={{ textAlign: "center" }}><b>WELCOME TO THE SITE</b></h1>
      </header>

      <main>
        {/* Top Navigation */}
        <div style={{ display: "flex", alignItems: "center", padding: 10, justifyContent: "space-between" }}>
          <Image src="/next.svg" width={80} height={80} alt="Next.js Logo" />
          <nav style={{ display: "flex", gap: 20 }}>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <input type="text" placeholder="Search..." style={{ padding: 5, borderRadius: 5, border: "1px solid gray" }} />
            <Link href="/cart"><Image src="/window.svg" width={30} height={30} alt="Cart logo" /></Link>
          </div>
        </div>

        {/* Header Banner */}
        <div style={{ position: "relative", width: "100%", height: "400px", marginBottom: 20 }}>
          <Image src="/header.png" fill style={{ objectFit: "cover" }} alt="Header" />
        </div>

        <h1 style={{ textAlign: "center", marginBottom: 20 }}><b>NEW ARRIVALS</b></h1>
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

        <h1 style={{ textAlign: "center", padding: 20, borderBottom: "5px solid #006039" }}><b>ONGOING OFFERS</b></h1>
        <Carousel products={products} />

        <h1 style={{ textAlign: "center", padding: 20, borderBottom: "5px solid #006039" }}><b>NEW TRENDING</b></h1>

        <footer style={{ backgroundColor: "#006039", textAlign: "center", color: "beige", padding: 20 }}>
          <b>Created and Managed by Meeket Tank</b>
        </footer>
      </main>
    </>
  );
}
