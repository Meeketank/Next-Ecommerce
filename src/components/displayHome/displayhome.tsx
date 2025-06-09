import React from 'react'
import Image from 'next/image'
import products from '@/app/data/watches.json'
import Link from 'next/link'
import "@/app/globals.css";

const DisplayHome = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px", padding: "20px", backgroundColor: "#006039" }}>
      <div style={{ flex: 2, position: "relative", borderRadius: "12px" }}>
        <div className="watch-hover-container" style={{ width: "100%", height: "100%" }}>
          <Link href={`/pdp/${products[17].id}`}>
            <Image src={products[17].image} alt="watch image" fill className="watch-hover-image" />
          </Link>
          <div className="watch-hover-text">Show Details</div>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
        <div className="watch-hover-container" style={{ position: "relative", width: "400px", height: "200px", marginLeft: 10 }}>
          <Link href={`/pdp/${products[6].id}`}>
            <Image src={products[6].image} alt="watch image" fill className="watch-hover-image" />
          </Link>
          <div className="watch-hover-text">Show Details</div>
        </div>

        <div className="watch-hover-container" style={{ position: "relative", width: "400px", height: "200px", marginLeft: 10 }}>
          <Link href={`/pdp/${products[14].id}`}>
            <Image src={products[14].image} alt="watch image" fill className="watch-hover-image" />
          </Link>
          <div className="watch-hover-text">Show Details</div>
        </div>
      </div>
    </div>
  )
}

export default DisplayHome
