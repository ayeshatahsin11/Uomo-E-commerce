"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Share2 } from "lucide-react";
import Breadcrumb from "@/components/common/BreadCrumb";
import { useParams } from "next/navigation";



const defaultProduct = {
  name: "Organic Strawberry Basket",
  price: 40,
  oldPrice: 48,
  description:
    "Freshly harvested organic strawberries, hand-picked at peak ripeness. Sweet, juicy, and packed with vitamin C — perfect for snacking, smoothies, or desserts.",
  images: [
    "/products/strawberry-1.jpg",
    "/products/strawberry-2.jpg",
    "/products/strawberry-3.jpg",
    "/products/strawberry-4.jpg",
  ],
  sizes: ["250g", "500g", "1kg", "2kg"],
  colors: [
    { name: "Red", hex: "#C0392B" },
    { name: "Green", hex: "#6B8E4E" },
    { name: "Natural", hex: "#E6DCC8" },
  ],
  sku: "FR-0231",
  category: "Fruits, Fresh Picks",
  tags: ["organic", "seasonal", "vitamin-c"],
};

const ShopSingleProduct = ({ product = defaultProduct }) => {
   const { slug } = useParams();

  // Option A: quick fallback - slug ke readable banano
  const readableName = slug
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Breadcrumb + prev/next */}
      <div className="flex items-center justify-between mb-6 text-xs font-medium tracking-wide">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "The Shop", href: "/shop" },
          { label: readableName },
        ]}
      />
        <div className="flex items-center gap-4 text-[#4B4536]">
          <button className="flex items-center gap-1 hover:text-[#22331F] duration-200 cursor-pointer">
            <ChevronLeft size={14} /> PREV
          </button>
          <span className="text-[#E6DCC8]">|</span>
          <button className="flex items-center gap-1 hover:text-[#22331F] duration-200 cursor-pointer">
            NEXT <ChevronRight size={14} />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Gallery */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            {product.images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImage(i)}
                className={`size-16 rounded-md overflow-hidden border duration-200 cursor-pointer ${
                  activeImage === i
                    ? "border-[#22331F]"
                    : "border-[#EFE6D3] hover:border-[#C9BFA8]"
                }`}
              >
                <img
                  src={img}
                  alt={`${product.name} ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <div className="w-[380px] h-[420px] rounded-lg overflow-hidden bg-[#FBF6EC] border border-[#EFE6D3]">
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 flex flex-col gap-5">
          <div>
            <h1 className="text-2xl font-semibold text-[#22331F]">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="text-lg font-semibold text-[#22331F]">
                ${product.price}
              </span>
              {product.oldPrice && (
                <span className="text-sm text-[#9A8F7A] line-through">
                  ${product.oldPrice}
                </span>
              )}
            </div>
          </div>

          <p className="text-sm text-[#4B4536] leading-relaxed max-w-md">
            {product.description}
          </p>

          {/* Sizes */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#22331F] tracking-wide">
                SIZES
              </span>
              <button className="text-xs text-[#9A8F7A] underline hover:text-[#22331F] duration-200 cursor-pointer">
                Size Guide
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md border duration-200 cursor-pointer ${
                    selectedSize === size
                      ? "bg-[#22331F] border-[#22331F] text-white"
                      : "border-[#C9BFA8] text-[#4B4536] hover:border-[#22331F]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div>
            <span className="text-xs font-semibold text-[#22331F] tracking-wide">
              COLOR
            </span>
            <div className="flex items-center gap-3 mt-2">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  aria-label={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`size-6 rounded-full duration-200 cursor-pointer ${
                    selectedColor === color.name
                      ? "ring-2 ring-offset-2 ring-[#22331F]"
                      : "ring-1 ring-offset-2 ring-transparent hover:ring-[#C9BFA8]"
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="flex items-center gap-3 mt-1">
            <div className="flex items-center border border-[#C9BFA8] rounded-md overflow-hidden">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-2.5 text-[#4B4536] hover:bg-[#FBF6EC] duration-200 cursor-pointer"
              >
                −
              </button>
              <span className="px-4 text-sm font-medium text-[#22331F]">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-2.5 text-[#4B4536] hover:bg-[#FBF6EC] duration-200 cursor-pointer"
              >
                +
              </button>
            </div>

            <button className="flex-1 bg-[#22331F] text-white text-sm font-medium py-2.5 rounded-md hover:bg-[#2C4429] duration-200 cursor-pointer">
              ADD TO CART
            </button>
          </div>

          {/* Wishlist / Share */}
          <div className="flex items-center gap-6 mt-1">
            <button
              onClick={() => setWishlisted((w) => !w)}
              className="flex items-center gap-1.5 text-xs font-medium text-[#4B4536] hover:text-[#22331F] duration-200 cursor-pointer"
            >
              <Heart
                size={15}
                className={wishlisted ? "fill-[#C0392B] text-[#C0392B]" : ""}
              />
              ADD TO WISHLIST
            </button>
            <button className="flex items-center gap-1.5 text-xs font-medium text-[#4B4536] hover:text-[#22331F] duration-200 cursor-pointer">
              <Share2 size={15} />
              SHARE
            </button>
          </div>

          {/* Meta */}
          <div className="border-t border-[#EFE6D3] pt-4 mt-2 flex flex-col gap-1.5 text-xs text-[#9A8F7A]">
            <p>
              SKU: <span className="text-[#4B4536]">{product.sku}</span>
            </p>
            <p>
              CATEGORIES:{" "}
              <span className="text-[#4B4536]">{product.category}</span>
            </p>
            <p>
              TAGS: <span className="text-[#4B4536]">{product.tags.join(", ")}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSingleProduct;

// [id] this is used for dynamic routes, shop er url e jai likhbo ta ekhn dynamic hoye jabe