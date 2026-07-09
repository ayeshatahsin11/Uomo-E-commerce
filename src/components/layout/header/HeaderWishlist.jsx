"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Heart, X, ShoppingBasket } from "lucide-react";
import avocado from '../../../app/assests/Images/avocado.jpg'
import spinach from '../../../app/assests/Images/spinach.jpg'
import apricot from '../../../app/assests/Images/apricot.jpg'
const initialWishlist = [
  {
    id: 1,
    name: "Fresh Avocados",
    pricePerKg: 13.0,
    availability: "in-season",
    image: avocado,
  },
  {
    id: 2,
    name: "Dried Apricots",
    pricePerKg: 22.5,
    availability: "limited",
    image: apricot,
  },
  {
    id: 3,
    name: "Baby Spinach",
    pricePerKg: 16.25,
    availability: "in-season",
    image: spinach,
  },
];

const availabilityMap = {
  "in-season": { label: "In Season", dot: "#1E2B12" },
  limited: { label: "Limited Stock", dot: "#E895AF" },
};

const HeaderWishlist = () => {
  const [wishlist, setWishlist] = useState(initialWishlist);

  const removeItem = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative cursor-pointer">
          <Heart size={20} color="white" strokeWidth={1.5} />
          {wishlist.length > 0 && (
            <span className="size-4 rounded-full bg-primary text-white font-medium text-[10px] absolute -bottom-1.25 -right-2.5 flex items-center justify-center">
              {wishlist.length}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="w-full sm:max-w-md bg-[#D4BCA3] border-none p-0 flex flex-col gap-0 [&>button]:hidden">
        {/* Header */}
        <SheetHeader className="flex-row items-center justify-between px-6 py-5 border-b border-[#1E2B12]/15 space-y-0">
          <SheetTitle className="text-sm tracking-widest uppercase font-semibold text-[#1E2B12]">
            Wishlist ({wishlist.length})
          </SheetTitle>
          <SheetClose asChild>
            <button
              aria-label="Close wishlist"
              className="cursor-pointer text-[#1E2B12] transition-opacity hover:opacity-60"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </SheetClose>
        </SheetHeader>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 divide-y divide-[#1E2B12]/15">
          {wishlist.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-20 gap-2">
              <Heart size={28} strokeWidth={1.2} className="text-[#F6DCE4]" />
              <p className="text-sm text-[#1E2B12]/70 mt-2">
                Nothing saved yet.
              </p>
              <p className="text-xs text-[#1E2B12]/50">
                Tap the heart on any product to save it here.
              </p>
            </div>
          ) : (
            wishlist.map((item) => {
              const status = availabilityMap[item.availability];
              return (
                <div key={item.id} className="flex gap-4 py-5">
                  <div className="relative size-20 shrink-0 rounded-md overflow-hidden bg-white/40">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-[#1E2B12]">
                          {item.name}
                        </h3>
                        <p className="text-xs text-[#1E2B12]/60 mt-1">
                          ${item.pricePerKg.toFixed(2)} / kg
                        </p>
                      </div>
                      <button
                        aria-label={`Remove ${item.name} from wishlist`}
                        onClick={() => removeItem(item.id)}
                        className="cursor-pointer text-[#F6DCE4] transition-colors hover:text-white"
                      >
                        <Heart size={18} strokeWidth={1.5} fill="currentColor" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <span className="inline-flex items-center gap-1.5 text-[11px] text-[#1E2B12]/70">
                        <span
                          className="size-1.5 rounded-full"
                          style={{ backgroundColor: status.dot }}
                        />
                        {status.label}
                      </span>

                      <button className="cursor-pointer inline-flex items-center gap-1.5 text-[11px] tracking-wide uppercase font-medium text-[#1E2B12] bg-[#F6DCE4] rounded-full px-3 py-1.5 transition-colors hover:bg-white">
                        <ShoppingBasket size={13} strokeWidth={1.5} />
                        Add to Basket
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {wishlist.length > 0 && (
          <div className="border-t border-[#1E2B12]/15 px-6 py-5">
            <button className="cursor-pointer w-full py-3.5 text-xs tracking-widest uppercase font-medium text-[#1E2B12] bg-[#F6DCE4] rounded-sm transition-colors hover:bg-white">
              Move All to Basket
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default HeaderWishlist;