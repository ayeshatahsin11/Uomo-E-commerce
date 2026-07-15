"use client";
import React, { useState } from "react";
import { ChevronUp } from "lucide-react";

/**
 * Reusable accordion section for filter sidebar
 * @param {string} title - section heading (e.g., "PRODUCT CATEGORIES")
 * @param {boolean} defaultOpen - accordion default e open thakbe kina
 * @param {ReactNode} children - section er content
 */
const FilterAccordion = ({ title, defaultOpen = true, children }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className=" py-5">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between cursor-pointer"
      >
        <h3 className="text-sm font-semibold tracking-wide text-[#22331F] uppercase">
          {title}
        </h3>
        <ChevronUp
          size={16}
          strokeWidth={2}
          className={`text-[#22331F] duration-300 ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>

      <div
        className={`grid duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default FilterAccordion;