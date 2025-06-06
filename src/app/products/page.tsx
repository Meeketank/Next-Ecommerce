"use client";
import Image from "next/image";
import Link from "next/link";
import products from "../data/watches.json";
import { useEffect, useState } from "react";
import { useCart } from "@/app/context/CartContext";
import AllProducts from "@/components/Products/allproducts";

export default function Products() {


  return (
    <>
        <h1 style={{textAlign: "center", padding: 60, borderBottom: "5px solid #006039"}}><b>ALL PRODUCTS</b></h1>
        <AllProducts/>
    </>
    
  );
}