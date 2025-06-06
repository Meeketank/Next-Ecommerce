"use client";
import { usePathname } from 'next/navigation';
import React from 'react'

const homebanner = () => {
    const pathname = usePathname();

  if (pathname !== "/") return null;
  return (
    <header style={{ color: "beige", backgroundColor: "#006039", padding: 10 }}>
        <h1 style={{ textAlign: "center" }}><b>WELCOME TO THE SITE</b></h1>
    </header>
  )
}

export default homebanner