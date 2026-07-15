"use client";
import React, { useState, useEffect } from "react";
import ProductCards from "../common/ProductCards";
import { useShopStore } from "@/store/useShopStore";

const gridColsMap = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

const ShopProducts = () => {
  const [products, setProducts] = useState([]);
  const sortValue = useShopStore((state) => state.sortValue);
  const gridView = useShopStore((state) => state.gridView);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // Sorting logic ekhon ei component e, product jekhane render hocche thikei
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortValue) {
      case "price_low_high":
        return a.price - b.price;
      case "price_high_low":
        return b.price - a.price;
      case "name_a_z":
        return a.name.localeCompare(b.name);
      case "name_z_a":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return (
    <div className={`grid ${gridColsMap[gridView]} gap-x-6 gap-y-5 mt-10`}>
      {sortedProducts?.map((product) => (
        <ProductCards key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ShopProducts;