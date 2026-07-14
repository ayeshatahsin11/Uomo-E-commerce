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
import { X, Minus, Plus, Handbag } from "lucide-react";
import Avocado from '../../../app/assests/Images/avocado.jpg'
import walnut from '../../../app/assests/Images/walnut.jpg'
import spinach from '../../../app/assests/Images/spinach.jpg'
const initialCartItems = [
  {
    id: 1,
    name: "Fresh Avocados",
    type: "Organic",
    unit: "g",
    step: 250,
    weight: 500,
    pricePerKg: 13.0,
    image: Avocado,  // assest use krle direct variable name boshbe
  },
  {
    id: 2,
    name: "Walnuts",
    type: "Organic",
    unit: "g",
    step: 250,
    weight: 250,
    pricePerKg: 32.0,
    image: walnut,
  },
  {
    id: 3,
    name: "Baby Spinach",
    type: "Regular",
    unit: "g",
    step: 200,
    weight: 200,
    pricePerKg: 16.25,
    image: spinach,
  },
];

const formatWeight = (grams) => {
  if (grams >= 1000) {
    return `${(grams / 1000).toFixed(grams % 1000 === 0 ? 0 : 2)}kg`;
  }
  return `${grams}g`;
};

const getItemPrice = (item) => (item.weight / 1000) * item.pricePerKg;

const HeaderCart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const increaseWeight = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, weight: item.weight + item.step } : item
      )
    );
  };

  const decreaseWeight = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.weight > item.step
          ? { ...item, weight: item.weight - item.step }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + getItemPrice(item),
    0
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative cursor-pointer">
          <Handbag size={20} color="white" strokeWidth={1.5} />
          <span className="size-4 rounded-full bg-primary text-white font-medium text-[10px] absolute -bottom-1.25 -right-2.5 flex items-center justify-center">
            {cartItems.length}
          </span>
        </button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-md bg-[#F5EDDF] border-none p-0 flex flex-col gap-0 [&>button]:hidden">
        {/* Header */}
        <SheetHeader className="flex-row items-center justify-between px-6 py-5 border-b border-[#E6D9C3] space-y-0">
          <SheetTitle className="text-sm tracking-widest uppercase font-semibold text-[#22331F]">
            My Basket ({cartItems.length})
          </SheetTitle>
          <SheetClose asChild>
            <button
              aria-label="Close cart"
              className="cursor-pointer text-[#22331F] transition-opacity hover:opacity-60"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </SheetClose>
        </SheetHeader>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 divide-y divide-[#E6D9C3]">
          {cartItems.length === 0 ? (
            <p className="text-sm text-[#9A8F7A] text-center py-10">
              Your basket is empty.
            </p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 py-5">
                <div className="relative size-24 shrink-0 rounded-md overflow-hidden bg-[#EFE3CF]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <div className="flex items-start justify-between">
                    <h3 className="text-sm font-medium text-[#22331F]">
                      {item.name}
                    </h3>
                    <button
                      aria-label={`Remove ${item.name}`}
                      onClick={() => removeItem(item.id)}
                      className="cursor-pointer text-[#9A8F7A] transition-colors hover:text-[#22331F]"
                    >
                      <X size={16} strokeWidth={1.5} />
                    </button>
                  </div>

                  <p className="text-xs text-[#9A8F7A] mt-1">
                    Type: <span className="text-[#5C6B52]">{item.type}</span>
                  </p>
                  <p className="text-xs text-[#9A8F7A]">
                    ${item.pricePerKg.toFixed(2)} / kg
                  </p>

                  <div className="md:flex items-center justify-between mt-3">
                    <div className="flex items-center gap-3 border border-[#E6D9C3] rounded-full px-2.5 py-1">
                      <button
                        aria-label="Decrease weight"
                        onClick={() => decreaseWeight(item.id)}
                        disabled={item.weight <= item.step}
                        className="cursor-pointer text-[#22331F] hover:text-[#B8895F] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <Minus size={12} strokeWidth={2} />
                      </button>
                      <span className="text-xs text-[#22331F] w-12 text-center">
                        {formatWeight(item.weight)}
                      </span>
                      <button
                        aria-label="Increase weight"
                        onClick={() => increaseWeight(item.id)}
                        className="cursor-pointer text-[#22331F] hover:text-[#B8895F] transition-colors"
                      >
                        <Plus size={12} strokeWidth={2} />
                      </button>
                    </div>
                    <span className="text-sm  font-medium text-[#22331F]">
                      ${getItemPrice(item).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-[#E6D9C3] px-6 py-5 bg-[#F5EDDF]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs tracking-widest uppercase text-[#5C6B52]">
              Subtotal
            </span>
            <span className="text-base font-semibold text-[#22331F]">
              ${subtotal.toFixed(2)}
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <button className="cursor-pointer w-full py-3.5 text-xs tracking-widest uppercase font-medium text-[#22331F] border border-[#22331F]/30 rounded-sm transition-colors hover:bg-[#EFE3CF]">
                View Basket
              </button>
            </SheetClose>
            <button className="cursor-pointer w-full py-3.5 text-xs tracking-widest uppercase font-medium text-white bg-[#22331F] rounded-sm transition-colors hover:bg-[#1A281A]">
              Checkout
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderCart;