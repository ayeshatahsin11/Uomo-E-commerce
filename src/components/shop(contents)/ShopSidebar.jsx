"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import FilterAccordion from "./FilterAccordion";

// ---- Default data (food e-commerce onujayi) - tumi prop diye override korte parbe ----
const defaultCategories = [
  { label: "Vegetables", count: 42 },
  { label: "Fruits", count: 38 },
  { label: "Groceries", count: 56 },
  { label: "Milk & Dairy", count: 19 },
  { label: "Seeds", count: 12 },
  { label: "Nuts", count: 15 },
  { label: "Bakery", count: 24 },
];

const defaultColors = [
  { name: "Red", hex: "#C0392B" },
  { name: "Green", hex: "#6B8E4E" },
  { name: "Yellow", hex: "#E4B429" },
  { name: "Orange", hex: "#DD8E3E" },
  { name: "Purple", hex: "#7D5A8C" },
  { name: "Brown", hex: "#8B5E3C" },
];

const defaultSizes = ["250g", "500g", "1kg", "2kg", "5kg"];

const defaultBrands = [
  { label: "Organic Valley", count: 24 },
  { label: "Fresh Farms", count: 41 },
  { label: "Nature's Best", count: 17 },
  { label: "GreenLeaf Co.", count: 9 },
  { label: "Harvest Home", count: 33 },
  { label: "Pure Roots", count: 12 },
];

const ShopSidebar = ({
  categories = defaultCategories,
  colors = defaultColors,
  sizes = defaultSizes,
  brands = defaultBrands,
  minPrice = 1,
  maxPrice = 100,
  onFilterChange,
  className = "",
}) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [brandSearch, setBrandSearch] = useState("");
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  const toggleCategory = (label) => {
    setSelectedCategories((prev) =>
      prev.includes(label)
        ? prev.filter((c) => c !== label)
        : [...prev, label]
    );
  };

  const toggleBrand = (label) => {
    setSelectedBrands((prev) =>
      prev.includes(label) ? prev.filter((b) => b !== label) : [...prev, label]
    );
  };

  const handleMinPriceChange = (e) => {
    const value = Math.min(Number(e.target.value), priceRange[1] - 1);
    setPriceRange([value, priceRange[1]]);
  };

  const handleMaxPriceChange = (e) => {
    const value = Math.max(Number(e.target.value), priceRange[0] + 1);
    setPriceRange([priceRange[0], value]);
  };

  const filteredBrands = brands.filter((b) =>
    b.label.toLowerCase().includes(brandSearch.toLowerCase())
  );

  // Parent ke shob filter state pathiye dei, jodi callback deওয়া thake
  React.useEffect(() => {
    onFilterChange?.({
      categories: selectedCategories,
      color: selectedColor,
      size: selectedSize,
      brands: selectedBrands,
      priceRange,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategories, selectedColor, selectedSize, selectedBrands, priceRange]);

  return (
    <div
      className={`max-w-72 shrink-0 bg-[#FBF6EC] border border-[#EFE6D3] rounded-lg px-6 py-2 ${className}`}
    >
      {/* Categories */}
      <FilterAccordion title="Product Categories">
        <ul className="flex flex-col gap-3">
          {categories.map((cat) => (
            <li key={cat.label}>
              <label className="flex items-center justify-between gap-2 cursor-pointer group">
                <span className="flex items-center gap-2.5">
                  <span
                    className={`size-4 rounded-[4px] border flex items-center justify-center duration-200 ${
                      selectedCategories.includes(cat.label)
                        ? "bg-[#22331F] border-[#22331F]"
                        : "border-[#C9BFA8] group-hover:border-[#22331F]"
                    }`}
                  >
                    {selectedCategories.includes(cat.label) && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path
                          d="M1 4L3.5 6.5L9 1"
                          stroke="white"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  <span className="text-sm text-[#4B4536] group-hover:text-[#22331F] duration-200">
                    {cat.label}
                  </span>
                </span>
                <input
                  type="checkbox"
                  className="hidden"
                  checked={selectedCategories.includes(cat.label)}
                  onChange={() => toggleCategory(cat.label)}
                />
              </label>
            </li>
          ))}
        </ul>
      </FilterAccordion>

      {/* Color */}
      <FilterAccordion title="Color">
        <div className="flex flex-wrap gap-3 py-2">
          {colors.map((color) => (
            <button
              key={color.name}
              type="button"
              aria-label={color.name}
              onClick={() =>
                setSelectedColor((prev) =>
                  prev === color.name ? null : color.name
                )
              }
              className={`size-7 rounded-full duration-200 ${
                selectedColor === color.name
                  ? "ring-2 ring-offset-2 ring-[#22331F]"
                  : "ring-1 ring-offset-2 ring-transparent hover:ring-[#C9BFA8]"
              }`}
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>
      </FilterAccordion>

      {/* Sizes (weight/pack size) */}
      <FilterAccordion title="Sizes">
        <div className="flex flex-wrap gap-2.5">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() =>
                setSelectedSize((prev) => (prev === size ? null : size))
              }
              className={`px-4 py-2 text-xs font-medium rounded-md border duration-200 cursor-pointer ${
                selectedSize === size
                  ? "bg-[#22331F] border-[#22331F] text-white"
                  : "border-[#C9BFA8] text-[#4B4536] hover:border-[#22331F]"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </FilterAccordion>

      {/* Brands */}
      <FilterAccordion title="Brands">
        <div className="relative mb-4">
          <input
            type="text"
            value={brandSearch}
            onChange={(e) => setBrandSearch(e.target.value)}
            placeholder="Search"
            className="w-full text-sm bg-white border border-[#E6DCC8] rounded-md pl-3 pr-9 py-2.5 outline-none focus:border-[#22331F] duration-200"
          />
          <Search
            size={15}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9A8F7A]"
          />
        </div>

        <ul className="flex flex-col gap-3 max-h-48 overflow-y-auto pr-1">
          {filteredBrands.length ? (
            filteredBrands.map((brand) => (
              <li key={brand.label}>
                <label className="flex items-center justify-between gap-2 cursor-pointer group">
                  <span className="flex items-center gap-2.5">
                    <span
                      className={`size-4 rounded-[4px] border flex items-center justify-center duration-200 ${
                        selectedBrands.includes(brand.label)
                          ? "bg-[#22331F] border-[#22331F]"
                          : "border-[#C9BFA8] group-hover:border-[#22331F]"
                      }`}
                    >
                      {selectedBrands.includes(brand.label) && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path
                            d="M1 4L3.5 6.5L9 1"
                            stroke="white"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="text-sm text-[#4B4536] group-hover:text-[#22331F] duration-200">
                      {brand.label}
                    </span>
                  </span>
                  <span className="text-xs text-[#9A8F7A]">{brand.count}</span>
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={selectedBrands.includes(brand.label)}
                    onChange={() => toggleBrand(brand.label)}
                  />
                </label>
              </li>
            ))
          ) : (
            <p className="text-xs text-[#9A8F7A]">No brands found.</p>
          )}
        </ul>
      </FilterAccordion>

      {/* Price */}
      <FilterAccordion title="Price">
        <div className="relative h-1.5 mt-2 mb-4">
          {/* base track */}
          <div className="absolute inset-0 rounded-full bg-[#E6DCC8]" />
          {/* active fill between two handles */}
          <div
            className="absolute h-full rounded-full bg-[#22331F]"
            style={{
              left: `${((priceRange[0] - minPrice) / (maxPrice - minPrice)) * 100}%`,
              right: `${100 - ((priceRange[1] - minPrice) / (maxPrice - minPrice)) * 100}%`,
            }}
          />
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={priceRange[0]}
            onChange={handleMinPriceChange}
            className="range-thumb absolute w-full top-1/2 -translate-y-1/2 appearance-none bg-transparent pointer-events-none"
          />
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={priceRange[1]}
            onChange={handleMaxPriceChange}
            className="range-thumb absolute w-full top-1/2 -translate-y-1/2 appearance-none bg-transparent pointer-events-none"
          />
        </div>

        <div className="flex items-center justify-between text-xs text-[#4B4536] font-medium">
          <span>Min Price: ${priceRange[0]}</span>
          <span>Max Price: ${priceRange[1]}</span>
        </div>
      </FilterAccordion>

      <style jsx global>{`
        .range-thumb::-webkit-slider-thumb {
          pointer-events: auto;
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #ffffff;
          border: 3px solid #22331f;
          cursor: pointer;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }
        .range-thumb::-moz-range-thumb {
          pointer-events: auto;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #ffffff;
          border: 3px solid #22331f;
          cursor: pointer;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default ShopSidebar;