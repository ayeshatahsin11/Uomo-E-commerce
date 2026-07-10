// import React from "react";
// import Link from "next/link";
// import Container from "../Container";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Menu, X, User, Facebook, Twitter, Instagram } from "lucide-react";
// import SearchInput from "./SearchInput";
// import Logo from "@/components/common/Logo";

// const mainLinks = [
//   { label: "Home", href: "/" },
//   { label: "New Arrivals", href: "/shop/new-arrivals" },
// ];

// const shopLinks = [
//   { label: "Fruits", href: "/shop/Fruits" },
//   { label: "Vegetables", href: "/shop/Vegetables" },
//   { label: "Seeds", href: "/shop/Seeds" },
//   { label: "Shop All", href: "/shop" },
// ];

// const secondaryLinks = [
//   { label: "About Us", href: "/about" },
//   { label: "Find a Store", href: "/find-a-store" },
//   { label: "Contact", href: "/contact" },
// ];
// const navData = [
//     {
//       id: 1,
//       name: "HOME",
//     },
//     {
//       id: 2,
//       name: "SHOP",
//     },
//     {
//       id: 3,
//       name: "COLLECTION",
//     },
//     {
//       id: 4,
//       name: "JOURNAL",
//     },
//     {
//       id: 5,
//       name: "LOOKBOOK",
//     },
//     {
//       id: 6,
//       name: "PAGES",
//     },
//     {
//       id: 7,
//       name: "SPECIAL OFFER",
//     },
//     {
//       id: 8,
//       name: "PURCHASE THEME",
//     },
//   ];

// const HeaderMenu = () => {
  
//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <button
//           aria-label="Open menu"
//           className="cursor-pointer p-1 transition-opacity hover:opacity-70"
//         >
//           <Menu size={22} color="white" strokeWidth={1.5} />
//         </button>
//       </SheetTrigger>

//       <SheetContent
//         side="left"
//         className="flex w-[85vw] max-w-sm bg-[#FAF3E1] text-[#1E2B12] border-none p-0  flex-col [&>button]:hidden"
//       >

    
//         {/* Header */}
//         <SheetHeader className="flex-row items-center justify-between px-6 py-6 bg-[#1E2B12]/80 border-b border-[#1E2B12]/15">
//           <SheetTitle asChild>
//             <Link
//               href="/"
//               className="text-xl font-medium tracking-wide text-[#1E2B12]"
//             >
//               <Logo/>
//             </Link>
//           </SheetTitle>
//           <SheetClose asChild>
//             <button
//               aria-label="Close menu"
//               className="cursor-pointer p-1 text-[#1E2B12] transition-opacity hover:opacity-60"
//             >
//               <X size={20} strokeWidth={1.5} />
//             </button>
//           </SheetClose>
//         </SheetHeader>

//         {/* Mobile Search — only relevant on small screens */}
//         <div className="px-6 pt-5 md:hidden">
//           <SearchInput variant="mobile" />
//         </div>

//         {/* Nav */}
//         <nav className="flex-1 overflow-y-auto px-6 py-6">
//           <ul className="flex flex-col gap-1">
//             {mainLinks.map((link) => (
//               <li key={link.href}>
//                 <SheetClose asChild>
//                   <Link
//                     href={link.href}
//                     className="block py-3 text-sm uppercase tracking-wider text-[#1E2B12] transition-colors hover:text-[#5C7A2E]"
//                   >
//                     {link.label}
//                   </Link>
//                 </SheetClose>
//               </li>
//             ))}
//           </ul>

//           <Accordion type="single" collapsible className="w-full">
//             <AccordionItem value="shop" className="border-none">
//               <AccordionTrigger
//                 className="py-3 text-sm uppercase tracking-wider text-[#1E2B12]! hover:no-underline hover:text-[#5C7A2E]! [&>svg]:text-[#1E2B12] [&>svg]:opacity-100"
//               >
//                 Shop
//               </AccordionTrigger>
//               <AccordionContent className="text-[#1E2B12]">
//                 <ul className="flex flex-col gap-1 pl-4">
//                   {shopLinks.map((link) => (
//                     <li key={link.href}>
//                       <SheetClose asChild>
//                         <Link
//                           href={link.href}
//                           className="block py-2.5 text-sm text-[#1E2B12]/70 transition-colors hover:text-[#1E2B12]"
//                         >
//                           {link.label}
//                         </Link>
//                       </SheetClose>
//                     </li>
//                   ))}
//                 </ul>
//               </AccordionContent>
//             </AccordionItem>
//           </Accordion>

//           <ul className="flex flex-col gap-1">
//             {secondaryLinks.map((link) => (
//               <li key={link.href}>
//                 <SheetClose asChild>
//                   <Link
//                     href={link.href}
//                     className="block py-3 text-sm uppercase tracking-wider text-[#1E2B12] transition-colors hover:text-[#5C7A2E]"
//                   >
//                     {link.label}
//                   </Link>
//                 </SheetClose>
//               </li>
//             ))}
//           </ul>
//         </nav>
//           <nav className="bg-primary pt-4.25 pb-3.75">
//         <Container>
//           <ul className="flex text-white gap-11">
//             {navData?.map((navlist) => (
//               <li
//                 className={`font-normal leading-6 relative text-sm after:content-[''] after:w-0 hover:after:w-2/4 after:h-0.5 after:bg-white after:absolute after:bottom-0 after:left-0 after:duration-300 ${navlist.id == 7 ? "ml-auto" : ""}`}
//               >
//                 <Link href={`${navlist.id}`}>{navlist.name}</Link>
//               </li>
//             ))}
//           </ul>
//         </Container>
//       </nav>

//         {/* Account */}
//         <div className="px-6 py-4 border-t border-[#1E2B12]/15">
//           <SheetClose asChild>
//             <Link
//               href="/account"
//               className="flex items-center gap-2 text-sm uppercase tracking-wider text-[#1E2B12] transition-colors hover:text-[#5C7A2E]"
//             >
//               <User size={16} strokeWidth={1.5} />
//               My Account
//             </Link>
//           </SheetClose>
//         </div>

       
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default HeaderMenu;

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
import SearchInput from "./SearchInput";
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

const navData = [
  { id: 1, name: "HOME", href: "/" },
  { id: 2, name: "SHOP", href: "/shop" },
  { id: 3, name: "COLLECTION", href: "/collection" },
  { id: 4, name: "JOURNAL", href: "/journal" },
  { id: 5, name: "LOOKBOOK", href: "/lookbook" },
  { id: 6, name: "PAGES", href: "/pages" },
  { id: 7, name: "SPECIAL OFFER", href: "/special-offer" },
  { id: 8, name: "PURCHASE THEME", href: "/purchase-theme" },
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
        className="flex w-[85vw] max-w-sm bg-[#FAF3E1] text-[#1E2B12] border-none p-0 flex-col [&>button]:hidden"
      >
        {/* Header */}
        <SheetHeader className="flex-row items-center justify-between px-6 py-6 border-b border-[#1E2B12]/15">
          <SheetTitle asChild>
            <Link href="/" className="text-xl font-medium tracking-wide text-[#1E2B12]">
              <Logo />
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

        {/* Mobile Search — only relevant on small screens */}
        <div className="px-6 pt-5 md:hidden">
          <SearchInput variant="mobile" />
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-6 py-6">
          {/* Nav 1 — md and up */}
          <div className="hidden md:block">
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
          </div>

          {/* Nav 2 — sm only, same design as Nav 1 */}
          <div className="md:hidden">
            <ul className="flex flex-col gap-1">
              {navData.map((navlist) => (
                <li key={navlist.id}>
                  <SheetClose asChild>
                    <Link
                      href={navlist.href}
                      className="block py-3 text-sm uppercase tracking-wider text-[#1E2B12] transition-colors hover:text-[#5C7A2E]"
                    >
                      {navlist.name}
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </div>
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

        {/* Socials */}
        {/* <div className="flex items-center gap-4 px-6 py-6 border-t border-[#1E2B12]/15">
          <Link href="#" aria-label="Facebook" className="text-[#1E2B12] hover:text-[#5C7A2E]">
            <Facebook size={18} strokeWidth={1.5} />
          </Link>
          <Link href="#" aria-label="Twitter" className="text-[#1E2B12] hover:text-[#5C7A2E]">
            <Twitter size={18} strokeWidth={1.5} />
          </Link>
          <Link href="#" aria-label="Instagram" className="text-[#1E2B12] hover:text-[#5C7A2E]">
            <Instagram size={18} strokeWidth={1.5} />
          </Link>
        </div> */}
      </SheetContent>
    </Sheet>
  );
};

export default HeaderMenu;