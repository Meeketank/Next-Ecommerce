import Image from "next/image";
import Link from "next/link";

export default function Contact() {
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
            {/* <Link href="/contact">Contact Us</Link> */}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 10, color: "beige" }}>
            <input type="text" placeholder="Search..." style={{ padding: 5, borderRadius: 5, border: "1px solid beige" }} />
            <Link href="/cart"><Image src="/window.svg" width={30} height={30} alt="Cart logo" /></Link>
          </div>
        </div>
        <div style={{ padding: 20, textAlign: "center" }}>
      <h2>Contact Us</h2>
      <p>Email: contact@yoursite.com</p>
      <p>Phone: +91 12345 67890</p>
    </div>
    </>
    
  );
}