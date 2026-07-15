"use client";
import React from "react";
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { useShopStore } from "@/store/useShopStore";

const sortOptions = [
  { value: "default", label: "Default Sorting" },
  { value: "popularity", label: "Sort by Popularity" },
  { value: "rating", label: "Sort by Average Rating" },
  { value: "newest", label: "Sort by Newest" },
  { value: "price_low_high", label: "Price: Low to High" },
  { value: "price_high_low", label: "Price: High to Low" },
  { value: "name_a_z", label: "Name: A to Z" },
  { value: "name_z_a", label: "Name: Z to A" },
];

const viewOptions = [2, 3, 4];

const SortandView = () => {
  const sortValue = useShopStore((state) => state.sortValue);
  const setSortValue = useShopStore((state) => state.setSortValue);
  const gridView = useShopStore((state) => state.gridView);
  const setGridView = useShopStore((state) => state.setGridView);

  return (
    <div className="flex flex-wrap items-center justify-between gap-7.5 py-4">
      {/* Sorting Dropdown */}
      <NativeSelect
        value={sortValue}
        onChange={(e) => setSortValue(e.target.value)}
        selectClassName={`border-none! uppercase text-primary-black font-medium w-40.5 cursor-pointer`}
        >
        <NativeSelectOptGroup label="Sort Products">
          {sortOptions.map((option) => (
            <NativeSelectOption key={option.value} value={option.value}>
              {option.label}
            </NativeSelectOption>
          ))}
        </NativeSelectOptGroup>
      </NativeSelect>
  

{/* empty div */}
<div className="w-0.5 h-5.5 bg-[#E4E4E4]">

</div>
      {/* View / Grid Toggle */}
      <div className="hidden sm:flex items-center gap-3 text-xs md:text-sm uppercase tracking-wide">
        <span className="text-primary-black font-medium">View</span>
        <div className="flex items-center gap-3">
          {viewOptions.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setGridView(value)}
              aria-label={`${value} column view`}
              className={`pb-1 border-b-2 duration-200 cursor-pointer ${
                gridView === value
                  ? "border-primary-black opacity-100 font-semibold"
                  : "border-transparent opacity-60 hover:opacity-80"
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortandView;