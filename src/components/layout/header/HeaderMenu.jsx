import React from "react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Menu, X, User, Facebook, Twitter, Instagram } from "lucide-react";
import Logo from "@/components/common/Logo";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "New Arrivals", href: "/shop/new-arrivals" },
];

const shopLinks = [
  { label: "Fruits", href: "/shop/Fruits" },
  { label: "Vegetables", href: "/shop/Vegetables" },
  { label: "Seeds", href: "/shop/Seeds" },
  { label: "Shop All", href: "/shop" },
];

const secondaryLinks = [
  { label: "About Us", href: "/about" },
  { label: "Find a Store", href: "/find-a-store" },
  { label: "Contact", href: "/contact" },
];

const HeaderMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label="Open menu"
          className="cursor-pointer p-1 transition-opacity hover:opacity-70"
        >
          <Menu size={22} color="white" strokeWidth={1.5} />
        </button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-[85vw] max-w-sm bg-[#FAF3E1] text-[#1E2B12] border-none p-0 flex flex-col [&>button]:hidden"
      >
        {/* Header */}
        <SheetHeader className="flex-row items-center justify-between px-6 py-6 border-b border-[#1E2B12]/15 bg-[#5C7A2E]">
          <SheetTitle asChild>
            <Link
              href="/"
              className="text-xl font-medium tracking-wide text-[#1E2B12]"
            >
              <Logo/>
            </Link>
          </SheetTitle>
          <SheetClose asChild>
            <button
              aria-label="Close menu"
              className="cursor-pointer p-1 text-[#1E2B12] transition-opacity hover:opacity-60"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </SheetClose>
        </SheetHeader>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-6 py-6">
          <ul className="flex flex-col gap-1">
            {mainLinks.map((link) => (
              <li key={link.href}>
                <SheetClose asChild>
                  <Link
                    href={link.href}
                    className="block py-3 text-sm uppercase tracking-wider text-[#1E2B12] transition-colors hover:text-[#5C7A2E]"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="shop" className="border-none">
              <AccordionTrigger
                className="py-3 text-sm uppercase tracking-wider text-[#1E2B12]! hover:no-underline hover:text-[#5C7A2E]! [&>svg]:text-[#1E2B12] [&>svg]:opacity-100"
              >
                Shop
              </AccordionTrigger>
              <AccordionContent className="text-[#1E2B12]">
                <ul className="flex flex-col gap-1 pl-4">
                  {shopLinks.map((link) => (
                    <li key={link.href}>
                      <SheetClose asChild>
                        <Link
                          href={link.href}
                          className="block py-2.5 text-sm text-[#1E2B12]/70 transition-colors hover:text-[#1E2B12]"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <ul className="flex flex-col gap-1">
            {secondaryLinks.map((link) => (
              <li key={link.href}>
                <SheetClose asChild>
                  <Link
                    href={link.href}
                    className="block py-3 text-sm uppercase tracking-wider text-[#1E2B12] transition-colors hover:text-[#5C7A2E]"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>

        {/* Account */}
        <div className="px-6 py-4 border-t border-[#1E2B12]/15">
          <SheetClose asChild>
            <Link
              href="/account"
              className="flex items-center gap-2 text-sm uppercase tracking-wider text-[#1E2B12] transition-colors hover:text-[#5C7A2E]"
            >
              <User size={16} strokeWidth={1.5} />
              My Account
            </Link>
          </SheetClose>
        </div>

      
      </SheetContent>
    </Sheet>
  );
};

export default HeaderMenu;