// import React from "react";
// import { Search } from "lucide-react";
// import {
//   NativeSelect,
//   NativeSelectOptGroup,
//   NativeSelectOption,
// } from "@/components/ui/native-select";

// const SearchInput = ({ variant = "desktop" }) => {
//   const isMobile = variant === "mobile";

//   return (
//     <div
//       className={
//         isMobile
//           ? "flex w-full h-12 items-center relative"
//           : "hidden md:flex w-136 h-12.5 items-center relative"
//       }
//     >
//       <Search className="md:hidden -ml-4 mr-1 cursor-pointer"/>
//       <input
//         type="text"
//         className={`w-full h-full bg-white rounded-sm pl-1 md:pl-5 ${
//           isMobile ? "pr-28" : ""
//         }`}
//         placeholder="Search Products..."
//       />
//       <div className="flex items-center md:gap-4.25 absolute right-0 md:right-4">
//         <NativeSelect
//           className="w-30 text-primary-black text-sm font-normal leading-6"
//           selectClassName="border-none cursor-pointer"
//         >
//           <NativeSelectOption value="">All Category</NativeSelectOption>
//           <NativeSelectOption value="Fruits">Fruits</NativeSelectOption>
//           <NativeSelectOption value="Vegetables">Vegetables</NativeSelectOption>
//           <NativeSelectOption value="Nuts">Nuts</NativeSelectOption>
//           <NativeSelectOption value="Seeds">Seeds</NativeSelectOption>
//         </NativeSelect>
//         <Search className="cursor-pointer hidden md:block" />
//       </div>
//     </div>
//   );
// };

// export default SearchInput;

"use client";
import React, { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { useProducts } from "@/store/useProduct";

const SearchInput = ({ variant = "desktop" }) => {
  const isMobile = variant === "mobile";
  const { allProducts, setAllProducts } = useProducts();

  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Header shob page-e mount hoy, tai ShopProducts na khullelo product fetch na o hote pare - safety fetch
  useEffect(() => {
    if (allProducts.length === 0) {
      const fetchProducts = async () => {
        try {
          const res = await fetch("/api/products");
          const data = await res.json();
          setAllProducts(data);
        } catch (err) {
          console.error(err);
        }
      };
      fetchProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Outside click korle dropdown bondho
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const matchedProducts =
    query.trim() === ""
      ? []
      : allProducts.filter((p) =>
          p.title.toLowerCase().includes(query.toLowerCase())
        );

  const handleSelect = () => {
    setQuery("");
    setIsOpen(false);
  };

  return (
    <div
      ref={wrapperRef}
      className={
        isMobile
          ? "flex w-full h-12 items-center relative"
          : "hidden md:flex w-136 h-12.5 items-center relative"
      }
    >
      <Search className="md:hidden -ml-4 mr-1 cursor-pointer" />
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => query.trim() !== "" && setIsOpen(true)}
        className={`w-full h-full bg-white rounded-sm pl-1 md:pl-5 ${
          isMobile ? "pr-28" : ""
        }`}
        placeholder="Search Products..."
      />
      <div className="flex items-center md:gap-4.25 absolute right-0 md:right-4">
        <NativeSelect
          className="w-30 text-primary-black text-sm font-normal leading-6"
          selectClassName="border-none cursor-pointer"
        >
          <NativeSelectOption value="">All Category</NativeSelectOption>
          <NativeSelectOption value="Fruit">Fruit</NativeSelectOption>
          <NativeSelectOption value="Vegetable">Vegetable</NativeSelectOption>
          <NativeSelectOption value="Nuts">Nuts</NativeSelectOption>
          <NativeSelectOption value="Seeds">Seeds</NativeSelectOption>
        </NativeSelect>
        <Search className="cursor-pointer hidden md:block" />
      </div>

      {/* Suggestion dropdown */}
      {isOpen && query.trim() !== "" && (
        <div className="absolute top-full left-0 w-full bg-white rounded-sm shadow-lg mt-1 z-50 max-h-80 overflow-y-auto">
          {matchedProducts.length ? (
            matchedProducts.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.id}`}
                onClick={handleSelect}
                className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#FBF6EC] duration-150 border-b border-[#EFE6D3] last:border-b-0"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="size-9 rounded-md object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm text-[#22331F] font-medium">
                    {product.title}
                  </span>
                  <span className="text-xs text-[#9A8F7A]">
                    {product.category}
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <p className="px-4 py-3 text-sm text-[#9A8F7A]">
              No products found.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;