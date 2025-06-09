"use client";

import Image from "next/image";
import products from "../app/data/watches.json";
import Carousel from "@/components/Carousel/carousel";
import DisplayHome from "@/components/displayHome/displayhome";
import ContextSection from "@/components/home/context";

export default function Home() {

  return (
    <>

      <main>
        <div style={{ position: "relative", width: "100%", height: "400px", marginBottom: 20 }}>
          <Image src="/header.png" fill style={{ objectFit: "cover" }} alt="Header" />
        </div>

        <h1 style={{ textAlign: "center", marginBottom: 20 }}><b>NEW ARRIVALS</b></h1>
        <DisplayHome/>

        <h1 style={{ textAlign: "center", padding: 20, borderBottom: "5px solid #006039" }}><b>ONGOING OFFERS</b></h1>
        <Carousel products={products} />

        <h1 style={{ textAlign: "center", padding: 20, borderBottom: "5px solid #006039" }}><b>NEW TRENDING</b></h1>
        <ContextSection/>
      </main>

    </>
  );
}
