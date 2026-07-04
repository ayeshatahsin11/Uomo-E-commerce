"use client"

import Image from "next/image";
import React from "react";
import ProductImage from "@/app/assests/Images/productImage01.jpg";
import { Rating } from 'react-simple-star-rating'
const ProductCards = () => {
  return (
    <>
      <Image src={ProductImage} alt="product" width={255} height={200} />
      <div>
        <h4>Makeup</h4>
        <h2>SheGlam Blush(Shade-blossom)</h2>
    <div className="flex items-center gap-0.5">
  <Rating initialValue={1} readonly size={20} />
</div>
      </div>
    </>
  );
};

export default ProductCards;
