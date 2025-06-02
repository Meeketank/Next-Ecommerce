import { privateDecrypt } from "crypto";
import Image from "next/image";
import products from "../app/data/watches.json";
import Link from "next/link";

export default function Home() {
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
        <h1 style={{textAlign: "center", padding: 20, borderBottom: "5px solid #006039"}}><b>NEW TRENDING</b></h1>
        <div>

        </div>
        <div>
          <footer style={{backgroundColor: "#006039", textAlign: "center", color: "beige", padding: 20}}><b>Created and Managed by Meeket Tank</b></footer>
        </div>
      </main>
    </>
  );
}