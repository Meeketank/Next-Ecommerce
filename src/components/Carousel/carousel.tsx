import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";

export type Product = {
  image: string;
  name: string;
  price: number;
  id: number;
  brand: string;
  category: string;
};

const Carousel = ({ products }: { products: Product[] }) => {
  const [index, setIndex] = useState(0);
  const itemsPerSlide = 3;
  const { cart, addToCart, updateQuantity } = useCart();

  const next = () => {
    if ((index + 1) * itemsPerSlide < products.length) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const visibleItems = products.slice(index * itemsPerSlide, (index + 1) * itemsPerSlide);

  return (
    <div
      style={{
        position: "relative",
        padding: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      }}
    >
      <button onClick={prev} style={{ fontSize: 24 }}>
        &lt;
      </button>
      {visibleItems.map((p: Product) => {
        const cartItem = cart.find((item) => item.id === p.id);
        return (
          <div
            key={p.id}
            style={{ textAlign: "center", backgroundColor: "#006039", padding: 10, borderRadius: 8 }}
          >
            <div style={{ width: 380, backgroundColor: "beige" }}>
              <Link href={`/pdp/${p.id}`}>
                <Image src={p.image} width={400} height={400} alt="product" />
              </Link>
              <h4 style={{ paddingTop: 10 }}>{p.name}</h4>
              <p>Price: ₹{p.price}</p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link href={`/pdp/${p.id}`}>
                  <button
                    style={{
                      backgroundColor: "#a37e2c",
                      color: "beige",
                      margin: 10,
                      padding: 10,
                      borderRadius: 10,
                    }}
                  >
                    Show Details
                  </button>
                </Link>

                {cartItem ? (
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <button
                      style={{
                        backgroundColor: "#a37e2c",
                        color: "white",
                        borderRadius: 8,
                        width: 30,
                        height: 43
                      }}
                      onClick={() => updateQuantity(p.id, cartItem.quantity - 1)}
                    >
                      -
                    </button>
                    <span style={{ fontWeight: "bold" }}>{cartItem.quantity}</span>
                    <button
                      style={{
                        backgroundColor: "#a37e2c",
                        color: "white",
                        borderRadius: 8,
                        width: 30,
                        height: 43
                      }}
                      onClick={() => updateQuantity(p.id, cartItem.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    style={{
                      backgroundColor: "#a37e2c",
                      color: "beige",
                      margin: 10,
                      padding: 10,
                      borderRadius: 10,
                    }}
                    onClick={() => addToCart(p)}
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
      <button onClick={next} style={{ fontSize: 24 }}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
