
"use client";
import { Handbag, Eye, Heart } from "lucide-react";
import Image from "next/image";
import StarRating from "./StarRating";

const ProductCards = ({ product }) => {
  return (
    <div key={product.id} className="relative w-63.75 border group border-#E4E4E4 rounded-lg overflow-hidden duration-200 hover:shadow-xl hover:shadow-black/25 mt-8.75">
      <Image
        src={product.image}
        alt={product.title}
        width={255}
        height={200}
        className="object-contain w-63.75 h-50"
      />

      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-in-out">
        <ul className="flex gap-2.5 justify-center">
          <li className="w-10 h-10 rounded-full hover:bg-primary hover:text-white duration-200 cursor-pointer text-[#074E37] bg-[#F3E8D6] flex justify-center items-center">
            <Handbag className="size-4" />
          </li>
          <li className="w-10 h-10 rounded-full hover:bg-primary hover:text-white duration-200 cursor-pointer text-[#074E37] bg-[#F3E8D6] flex justify-center items-center">
            <Eye className="size-4" />
          </li>
          <li className="w-10 h-10 rounded-full hover:bg-primary hover:text-white duration-200 cursor-pointer text-[#074E37] bg-[#F3E8D6] flex justify-center items-center">
            <Heart className="size-4" />
          </li>
        </ul>
      </div>

      <div className="pt-8.5 pl-5 pr-8.25 pb-3.25">
        <h4 className="font-normal text-sm text-primary-gray leading-6 truncate">
          {product.category}
        </h4>
        <h2 className="font-normal text-[15px] text-primary-black mt-0.5 truncate">
          {product.title}
        </h2>
        <div className="flex gap-4 items-center">
          <StarRating rating={product.rating} size={15} />
          <h6 className="truncate">{product.reviews.toLocaleString()}</h6>
        </div>
        <h3 className="text-[18px] text-primary font-normal mt-2.5">
          ${product.price}
        </h3>
      </div>
    </div>
  );
};

export default ProductCards;