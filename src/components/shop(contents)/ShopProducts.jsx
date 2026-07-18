

"use client";
import React, { useState, useEffect } from "react";
import ProductCards from "../common/ProductCards";
import { useShopStore } from "@/store/useShopStore";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Paginate from "./Paginate";
import { useProducts } from "@/store/useProduct";

const gridColsMap = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

const ShopProducts = () => {
  const { allProducts, setAllProducts, selectedCategory } = useProducts();

  const sortValue = useShopStore((state) => state.sortValue);
  const gridView = useShopStore((state) => state.gridView);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      setAllProducts(data); // ← master list e boshano hocche, ekhane e ekbar e fetch
      setLoading(false);
    };
    fetchProducts();
  }, []);

  // ---- Category onujayi display list derive kora, master ke touch na kore ----
  const displayedProducts =
    selectedCategory === "All Products"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  const sortedProducts = [...displayedProducts].sort((a, b) => {
    switch (sortValue) {
      case "price_low_high":
        return a.price - b.price;
      case "price_high_low":
        return b.price - a.price;
      case "name_a_z":
        return a.title.localeCompare(b.title);
      case "name_z_a":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  return (
    <div>
      {loading ? (
        <div className="grid grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, index) => (
            <Card key={index} className="w-full max-w-xs">
              <CardContent>
                <Skeleton className="aspect-video w-full" />
              </CardContent>
              <CardHeader>
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
            </Card>
          ))}
        </div>
      ) : (
        <Paginate
          items={sortedProducts}
          itemsPerPage={8}
          wrapperClassName={`grid ${gridColsMap[gridView]} gap-x-6 gap-y-5 mt-10`}
          renderItem={(product) => (
            <ProductCards key={product.id} product={product} />
          )}
        />
      )}
    </div>
  );
};

export default ShopProducts;