"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Share2 } from "lucide-react";
import Breadcrumb from "@/components/common/BreadCrumb";
import { useParams } from "next/navigation";

const ShopSingleProduct = () => {
  const { slug } = useParams(); // eta actually product.id
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/products`);
        const data = await res.json();

        // slug === product.id match kore actual product ber kora
        const found = data.find((p) => String(p.id) === String(slug));
        setProduct(found || null);
      } catch (err) {
        console.error(err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchProduct();
  }, [slug]);

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  // product load hole default size/color set kora
  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes?.[1] ?? product.sizes?.[0]);
      setSelectedColor(product.colors?.[0]?.name);
      setActiveImage(0);
    }
  }, [product]);

  if (loading) return null; // loading.jsx already ei kaj ta handle korbe
  if (!product) return <p className="text-center py-20">Product not found.</p>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Breadcrumb + prev/next */}
      <div className="flex items-center justify-between mb-6 text-xs font-medium tracking-wide">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "The Shop", href: "/shop" },
            { label: product.title },
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
            {(product.images ?? [product.image]).map((img, i) => (
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
                  alt={`${product.title} ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <div className="w-[380px] h-[420px] rounded-lg overflow-hidden bg-[#FBF6EC] border border-[#EFE6D3]">
            <img
              src={(product.images ?? [product.image])[activeImage]}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 flex flex-col gap-5">
          <div>
            <h1 className="text-2xl font-semibold text-[#22331F]">
              {product.title}
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

          {product.description && (
            <p className="text-sm text-[#4B4536] leading-relaxed max-w-md">
              {product.description}
            </p>
          )}

          {/* Sizes */}
          {product.sizes && (
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
          )}

          {/* Color */}
          {product.colors && (
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
          )}

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
            {product.sku && (
              <p>
                SKU: <span className="text-[#4B4536]">{product.sku}</span>
              </p>
            )}
            <p>
              CATEGORIES:{" "}
              <span className="text-[#4B4536]">{product.category}</span>
            </p>
            {product.tags && (
              <p>
                TAGS: <span className="text-[#4B4536]">{product.tags.join(", ")}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSingleProduct;

// [id] this is used for dynamic routes, shop er url e jai likhbo ta ekhn dynamic hoye jabe