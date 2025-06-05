"use client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import products from "@/app/data/watches.json";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: string;
  description?: string;
};

function Carousel({ products }: { products: Product[] }) {
  const [index, setIndex] = useState(0);
  const itemsPerSlide = 3;

  const next = () => {
    if ((index + 1) * itemsPerSlide < products.length) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const addtocart = (p: Product) => {
    alert("Item added to cart");
  };

  const visibleItems = products.slice(index * itemsPerSlide, (index + 1) * itemsPerSlide);

  return (
    <div style={{ backgroundColor: "#f8f8f8", paddingTop: 40, paddingBottom: 40 }}>
      <h1 style={{ textAlign: "center", paddingBottom: 20, paddingTop: 20, borderTop: "5px solid #006039" }}><b>YOU MAY ALSO LIKE</b></h1>
      <div style={{ position: "relative", padding: 20, display: "flex", alignItems: "center", justifyContent: "center", gap: 20 }}>
      <button onClick={prev} style={{ fontSize: 24 }}>&lt;</button>
      {visibleItems.map((p: { image: string | StaticImport; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; price: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined;}, i: Key | null | undefined) => (
        <div key={i} style={{ textAlign: "center", backgroundColor: "#006039", padding: 10, borderRadius: 8 }}>
          <div style={{width: 380, backgroundColor: "beige"}}>
            <Image src={p.image} width={400} height={400} alt="product" />
            <h4 style={{paddingTop: 10}}>{p.name}</h4>
            <p>Price: {p.price}$</p>
            <div style={{display: "flex", justifyContent: "center"}}>
              <Link href={`/pdp/${p.id}`}>
              <button style={{backgroundColor: "#a37e2c", color: "beige", margin: 10, padding: 10, borderRadius: 10}}>Show Details</button></Link>
              <button style={{backgroundColor: "#a37e2c", color: "beige", margin: 10, padding: 10, borderRadius: 10}} onClick={() => addtocart(p)}>Add to cart</button>
            </div>
          </div>
        </div>
      ))}
      <button onClick={next} style={{ fontSize: 24 }}>&gt;</button>
    </div>
    </div>
  );
}

const btnStyle = {
  backgroundColor: "#006039",
  color: "white",
  padding: "8px 14px",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer"
};

export default function Pdp({ params }: { params: { slug: string } }) {
  const productId = parseInt(params.slug);
  const product = products.find((item: Product) => item.id === productId);

  if (!product) notFound();

  return (
    <>
      {/* Navbar */}
      <div style={{ display: "flex", alignItems: "center", padding: 10, justifyContent: "space-between", backgroundColor: "#006039" }}>
        <Image src="/next.svg" width={80} height={80} alt="Next.js Logo" />
        <nav style={{ display: "flex", gap: 20, color: "beige" }}>
          <Link href="/">Home</Link>
          <Link href="/">Products</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <input type="text" placeholder="Search..." style={{ color: "beige", padding: 5, borderRadius: 5, border: "1px solid beige" }} />
          <Image src="/window.svg" width={30} height={30} alt="Cart logo" />
        </div>
      </div>

      {/* Product Details Section */}
      <div style={{ display: "flex", gap: 50, padding: 50, backgroundColor: "#fafafa" }}>
        {/* Image */}
        <div style={{ flex: 1 }}>
          <Image src={product.image} alt={product.name} width={500} height={500} style={{ borderRadius: "10px", objectFit: "cover" }} />
        </div>

        {/* Info */}
        <h1>Please select an item!!</h1>
      </div>

      {/* Related Products Carousel */}
      <Carousel products={products} />
    </>
  );
}
