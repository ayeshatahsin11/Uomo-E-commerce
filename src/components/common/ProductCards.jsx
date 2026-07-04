"use client";

import Image from "next/image";
import React from "react";
import ProductImage from "@/app/assests/Images/productImage01.jpg";
import { Rating } from "react-simple-star-rating";
import StarRating from "./StarRating";
const ProductCards = () => {
  return (
    <div className="w-63.75 border border-#E4E4E4 rounded-lg mt-8.75">
      <Image src={ProductImage} alt="product" width={255} height={200} />
      <div className="pt-8.5 pl-5 pr-8.25 pb-3.25">
        <h4 className="font-normal text-sm text-primary-gray leading-6">
          Makeup
        </h4>
        <h2 className="font-normal text-[15px] text-primary-black mt-0.5">
          SheGlam Blush (Blossom)
        </h2>
        <div className="flex gap-4">
          <StarRating rating={4} size={15} />
          <h6>321,756</h6>
        </div>
        <h3 className="text-[18px] text-primary font-normal mt-2.5">$60</h3>
      </div>
    </div>
  );
};

export default ProductCards;
