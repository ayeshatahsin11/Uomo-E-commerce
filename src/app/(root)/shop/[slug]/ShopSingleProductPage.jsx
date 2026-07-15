"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Breadcrumb from "@/components/common/BreadCrumb";
import ShopSingleProduct from "@/components/shop/ShopSingleProduct";

const ShopSingleProductPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`/api/products/${slug}`);
      const data = await res.json();
      setProduct(data);
    };
    if (slug) fetchProduct();
  }, [slug]);

  if (!product) return null; // ba loading.jsx already handle korbe eta

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "The Shop", href: "/shop" },
          { label: product.name },
        ]}
      />
      <ShopSingleProduct product={product} />
    </div>
  );
};

export default ShopSingleProductPage;