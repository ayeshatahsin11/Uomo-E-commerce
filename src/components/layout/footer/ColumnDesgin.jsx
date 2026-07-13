

"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const ColumnDesgin = ({ title, footerlinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-white border-b border-white/15 md:border-none pb-4 md:pb-0">
      {/* Mobile e button hishebe kaj korbe (accordion toggle),
          desktop e click disable + chevron hide */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between md:pointer-events-none"
      >
        <h2 className="text-[18px] font-medium uppercase">{title}</h2>
        <ChevronDown
          className={`size-5 text-white md:hidden duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Mobile e collapse/expand hobe, desktop e always visible thakbe */}
      <div
        className={`overflow-hidden duration-300 md:max-h-none! md:opacity-100! ${
          isOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mt-3 md:mt-7 flex flex-col gap-3 md:gap-4">
          {footerlinks?.map((item, index) => (
            <li
              key={index}
              className="text-sm md:leading-6 relative w-fit after:content-[''] after:w-0 hover:after:w-full after:h-0.5 after:bg-white after:absolute after:-bottom-1 after:left-0 after:duration-300"
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ColumnDesgin;
