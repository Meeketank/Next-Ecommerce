import React from "react";
import products from "@/app/data/watches.json";
import ProductCard from "./productcard";

const AllProducts = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 50,
        justifyContent: "center",
        padding: 20,
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AllProducts;
