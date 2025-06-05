"use client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import products from "@/app/data/watches.json";
import { use, useState } from "react";
import { useCart } from "@/app/context/CartContext";

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
  const { addToCart } = useCart();

  const visibleItems = products.slice(index * itemsPerSlide, (index + 1) * itemsPerSlide);

  return (
    <div style={{ backgroundColor: "#f8f8f8", padding: "40px 0" }}>
      <h2 style={{ textAlign: "center", paddingBottom: 20, paddingTop: 20, borderTop: "5px solid #006039" }}>
        <b>YOU MAY ALSO LIKE</b>
      </h2>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20 }}>
        <button onClick={prev} style={{ fontSize: 24 }}>&lt;</button>
        {visibleItems.map((p) => (
          <div key={p.id} style={{ textAlign: "center", backgroundColor: "#006039", padding: 10, borderRadius: 8 }}>
            <div style={{ width: 300, backgroundColor: "beige", borderRadius: 8 }}>
              <Image src={p.image} width={300} height={300} alt={p.name} />
              <h4 style={{ paddingTop: 10 }}>{p.name}</h4>
              <p>Price: ₹{p.price}</p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link href={`/pdp/${p.id}`}>
                  <button style={{ backgroundColor: "#a37e2c", color: "beige", margin: 10, padding: 10, borderRadius: 10 }}>
                    Show Details
                  </button>
                </Link>
                <button
                  style={{ backgroundColor: "#a37e2c", color: "beige", margin: 10, padding: 10, borderRadius: 10 }}
                  onClick={() => addToCart(p)}
                >
                  Add to cart
                </button>
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
  padding: "10px 20px",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  fontSize: "1rem"
};

export default function Pdp({ params }: { params: { slug: string } }) {
  // const { slug } = use(params);
  const productId = parseInt(params.slug);
  // const product = products.find((item: Product) => item.id === productId);
  const product = products.find((item: Product) => item.id === productId);
  const { addToCart } = useCart();

  if (!product) notFound();

  return (
    <>
      {/* Navbar */}
      <header style={{ display: "flex", alignItems: "center", padding: 10, justifyContent: "space-between", backgroundColor: "#006039" }}>
        <Image src="/next.svg" width={80} height={80} alt="Logo" />
        <nav style={{ display: "flex", gap: 20, color: "beige" }}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <input type="text" placeholder="Search..." style={{ color: "beige", padding: 5, borderRadius: 5, border: "1px solid beige" }} />
          <Link href="/cart"><Image src="/window.svg" width={30} height={30} alt="Cart" /></Link>
        </div>
      </header>

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

      {/* Related Products */}
      <Carousel products={products} />
    </>
  );
}
