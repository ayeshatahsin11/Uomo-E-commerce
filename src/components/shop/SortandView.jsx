"use client";
import React, { useState } from "react";
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Grid2X2, Grid3X3, LayoutGrid } from "lucide-react";

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

// gridView mane sidebar soho total column (sidebar = 1 column dhora hoy)
const viewOptions = [
  { value: 2, icon: LayoutGrid },
  { value: 3, icon: Grid2X2 },
  { value: 4, icon: Grid3X3 },
];

const SortandView = ({
  sortValue,
  onSortChange,
  gridView,
  onGridViewChange,
}) => {
  // Jodi parent theke controlled prop na ashe, internal state diye fallback
  const [internalSort, setInternalSort] = useState("default");
  const [internalGrid, setInternalGrid] = useState(4);

  const currentSort = sortValue ?? internalSort;
  const currentGrid = gridView ?? internalGrid;

  const handleSortChange = (e) => {
    const value = e.target.value;
    if (onSortChange) {
      onSortChange(value);
    } else {
      setInternalSort(value);
    }
  };

  const handleGridChange = (value) => {
    if (onGridViewChange) {
      onGridViewChange(value);
    } else {
      setInternalGrid(value);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-b border-gray-200">
      {/* Sorting Dropdown */}
      <NativeSelect
        value={currentSort}
        onChange={handleSortChange}
        className="w-fit min-w-48 text-xs md:text-sm uppercase tracking-wide font-medium border-none bg-transparent focus:outline-none cursor-pointer"
      >
        <NativeSelectOptGroup label="Sort Products">
          {sortOptions.map((option) => (
            <NativeSelectOption key={option.value} value={option.value}>
              {option.label}
            </NativeSelectOption>
          ))}
        </NativeSelectOptGroup>
      </NativeSelect>

      {/* View / Grid Toggle */}
      <div className="hidden sm:flex items-center gap-3 text-xs md:text-sm uppercase tracking-wide">
        <span className="opacity-60 font-medium">View</span>
        <div className="flex items-center gap-3">
          {viewOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleGridChange(option.value)}
              aria-label={`${option.value} column view`}
              className={`pb-1 border-b-2 duration-200 cursor-pointer ${
                currentGrid === option.value
                  ? "border-primary opacity-100 font-semibold"
                  : "border-transparent opacity-50 hover:opacity-80"
              }`}
            >
              {option.value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortandView;