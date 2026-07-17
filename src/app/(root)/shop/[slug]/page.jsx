"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Share2 } from "lucide-react";
import Breadcrumb from "@/components/common/BreadCrumb";
import { Skeleton } from "@/components/ui/skeleton";
import { useParams } from "next/navigation";

const ShopSingleProduct = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/products`);
        const data = await res.json();
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

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes?.[1] ?? product.sizes?.[0]);
      setSelectedColor(product.colors?.[0]?.name);
      setActiveImage(0);
    }
  }, [product]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Breadcrumb + prev/next */}
      <div className="flex items-center justify-between mb-6 text-xs font-medium tracking-wide">
        {loading ? (
          <Skeleton className="h-4 w-48 bg-[#EFE6D3]" />
        ) : product ? (
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "The Shop", href: "/shop" },
              { label: product.title },
            ]}
          />
        ) : (
          <div />
        )}
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

      {loading ? (
        // ---- Skeleton matching the actual product layout ----
        <div className="flex flex-col md:flex-row gap-10">
          {/* Gallery skeleton */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton
                  key={i}
                  className="size-16 rounded-md bg-[#EFE6D3]"
                />
              ))}
            </div>
            <Skeleton className="w-[380px] h-[420px] rounded-lg bg-[#EFE6D3]" />
          </div>

          {/* Details skeleton */}
          <div className="flex-1 flex flex-col gap-5">
            <div className="flex flex-col gap-2.5">
              <Skeleton className="h-7 w-2/3 bg-[#EFE6D3]" />
              <Skeleton className="h-5 w-24 bg-[#EFE6D3]" />
            </div>

            <div className="flex flex-col gap-2 max-w-md">
              <Skeleton className="h-3.5 w-full bg-[#EFE6D3]" />
              <Skeleton className="h-3.5 w-full bg-[#EFE6D3]" />
              <Skeleton className="h-3.5 w-2/3 bg-[#EFE6D3]" />
            </div>

            {/* Sizes */}
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3 w-14 bg-[#EFE6D3]" />
              <div className="flex gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-8 w-14 rounded-md bg-[#EFE6D3]" />
                ))}
              </div>
            </div>

            {/* Color */}
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3 w-14 bg-[#EFE6D3]" />
              <div className="flex gap-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="size-6 rounded-full bg-[#EFE6D3]" />
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="flex items-center gap-3 mt-1">
              <Skeleton className="h-11 w-28 rounded-md bg-[#EFE6D3]" />
              <Skeleton className="h-11 flex-1 rounded-md bg-[#EFE6D3]" />
            </div>

            {/* Wishlist / Share */}
            <div className="flex items-center gap-6 mt-1">
              <Skeleton className="h-4 w-32 bg-[#EFE6D3]" />
              <Skeleton className="h-4 w-16 bg-[#EFE6D3]" />
            </div>

            {/* Meta */}
            <div className="border-t border-[#EFE6D3] pt-4 mt-2 flex flex-col gap-2">
              <Skeleton className="h-3 w-24 bg-[#EFE6D3]" />
              <Skeleton className="h-3 w-40 bg-[#EFE6D3]" />
              <Skeleton className="h-3 w-32 bg-[#EFE6D3]" />
            </div>
          </div>
        </div>
      ) : !product ? (
        <p className="text-center py-20">Product not found.</p>
      ) : (
        <div className="flex flex-col md:flex-row gap-10">
          {/* Gallery */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-3">
              {(product.images ?? [product.image]).map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`size-16 rounded-md  overflow-hidden border-2 duration-200 cursor-pointer ${
                    activeImage === i
                      ? "border-2 border-[#22331F]"
                      : "border-2 border-[#EFE6D3] hover:border-[#C9BFA8]"
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

            <div className="w-95 h-105 rounded-lg overflow-hidden bg-[#FBF6EC] border border-[#EFE6D3]">
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

            {/* Weights */}
            {product.weights && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-[#22331F] tracking-wide uppercase">
                    Weight
                  </span>
                  <button className="text-xs text-[#9A8F7A] underline hover:text-[#22331F] duration-200 cursor-pointer">
                    Weight Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.weights.map((weight) => (
                    <button
                      key={weight}
                      onClick={() => setSelectedSize(weight)}
                      className={`px-3.5 py-1.5 text-xs font-medium rounded-md border duration-200 cursor-pointer ${
                        selectedSize === weight
                          ? "bg-[#22331F] border-[#22331F] text-white"
                          : "border-[#C9BFA8] text-[#4B4536] hover:border-[#22331F]"
                      }`}
                    >
                      {weight}
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
      )}
    </div>
  );
};

export default ShopSingleProduct;

// [id] this is used for dynamic routes, shop er url e jai likhbo ta ekhn dynamic hoye jabe