import Image from "next/image";
import Link from "next/link";
import cart from "../page"

export default function Cart() {
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
            <Link href="/">Products</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 10, color: "beige" }}>
            <input type="text" placeholder="Search..." style={{ padding: 5, borderRadius: 5, border: "1px solid beige" }} />
            <Image src="/window.svg" width={30} height={30} alt="Cart logo" />
          </div>
        </div>
        <div style={{ padding: 20, textAlign: "center" }}>
            <h1>This is cart</h1>
        </div>
    </>
    
  );
}