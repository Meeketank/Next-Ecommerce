import React from 'react'
import Image from 'next/image'
import products from '@/app/data/watches.json'
import Link from 'next/link'

const DisplayHome = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px", backgroundColor: "#006039" }}>
          <div style={{ flex: 2, position: "relative", padding: "20px", borderRadius: "12px" }}>
            <Link href={`/pdp/${products[17].id}`}><Image src={products[17].image} alt="watch image" fill style={{ objectFit: "cover", borderRadius: "10px" }} /></Link>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ position: "relative", padding: "20px", width: "400px", height: "200px", borderRadius: "12px", marginLeft: 10 }}>
              <Link href={`/pdp/${products[6].id}`}><Image src={products[6].image} alt="watch image" fill style={{ objectFit: "cover", borderRadius: "10px" }} /></Link>
            </div>
            <div style={{ position: "relative", padding: "20px", width: "400px", height: "200px", borderRadius: "12px", marginLeft: 10 }}>
              <Link href={`/pdp/${products[14].id}`}><Image src={products[14].image} alt="watch image" fill style={{ objectFit: "cover", borderRadius: "10px" }} /></Link>
            </div>
          </div>
    </div>
  )
}

export default DisplayHome