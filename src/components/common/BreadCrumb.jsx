import Link from "next/link";
import React from "react";

/**
 * Reusable Breadcrumb Component
 * 
 * @param {Array} items - [{ label: "Home", href: "/" }, { label: "The Shop" }]
 *   - Last item ke "current page" dhora hoy (href thakle o ignore hobe, bold + opacity-100 hobe)
 *   - Baki shob item link hishebe kaj korbe (opacity-80, hover e opacity-100)
 */
const Breadcrumb = ({ items = [] }) => {
  if (!items?.length) return null;

  return (
    <nav aria-label="Breadcrumb">
      <ul className="flex items-center flex-wrap gap-2 leading-6 text-sm uppercase tracking-wide font-medium">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {!isLast && item.href ? (
                <Link
                  href={item.href}
                  className="opacity-80 hover:opacity-100 duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="opacity-100 font-semibold">
                  {item.label}
                </span>
              )}

              {!isLast && <span className="opacity-60">/</span>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;


// emn vabe create kora jate nested breadcrumb o kora jay, like 3/4 levels, just label and href er array pass krbo, last e just label dilei hobe