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
import { Menu, X, User } from "lucide-react";
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
        <SheetHeader className="flex-row bg-[#1E2B12]/70 items-center justify-between px-6 py-6 border-b border-[#1E2B12]/15">
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
                      className="block py-3 text-sm uppercase tracking-wider text-[#1E2B12] transition-colors hover:text-[#445e1d] relative after:content-[''] after:w-0 hover:after:w-2/4 after:h-0.5 after:bg-[#445e1d] after:absolute after:bottom-0 after:left-0 after:duration-300"
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
        <div className="flex items-center gap-4 px-6 py-6 border-t border-[#1E2B12]/15">
          <Link href="#" aria-label="Facebook" className="text-[#1E2B12] hover:text-[#5C7A2E]">
            <svg
          width="20"
          height="20"
          viewBox="0 0 8 14"
         
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.10547 14V7.73828H0V5.25H2.10547V3.28125C2.10547 2.24219 2.39714 1.4401 2.98047 0.875C3.5638 0.291667 4.33854 0 5.30469 0C6.08854 0 6.72656 0.0364583 7.21875 0.109375V2.32422H5.90625C5.41406 2.32422 5.07682 2.43359 4.89453 2.65234C4.7487 2.83464 4.67578 3.1263 4.67578 3.52734V5.25H7L6.67188 7.73828H4.67578V14H2.10547Z"
            fill="darkgreen"
          />
        </svg>
          </Link>
          <Link href="#" aria-label="Twitter" className="text-[#1E2B12] hover:text-[#5C7A2E]">
           <svg
          width="20"
          height="20"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5508 2.81641C12.5508 2.95312 12.5508 3.0625 12.5508 3.19922C12.5508 7 9.67969 11.3477 4.40234 11.3477C2.76172 11.3477 1.25781 10.8828 0 10.0625C0.21875 10.0898 0.4375 10.1172 0.683594 10.1172C2.02344 10.1172 3.25391 9.65234 4.23828 8.88672C2.98047 8.85938 1.91406 8.03906 1.55859 6.89062C1.75 6.91797 1.91406 6.94531 2.10547 6.94531C2.35156 6.94531 2.625 6.89062 2.84375 6.83594C1.53125 6.5625 0.546875 5.41406 0.546875 4.01953V3.99219C0.929688 4.21094 1.39453 4.32031 1.85938 4.34766C1.06641 3.82812 0.574219 2.95312 0.574219 1.96875C0.574219 1.42188 0.710938 0.929688 0.957031 0.519531C2.37891 2.24219 4.51172 3.39062 6.89062 3.52734C6.83594 3.30859 6.80859 3.08984 6.80859 2.87109C6.80859 1.28516 8.09375 0 9.67969 0C10.5 0 11.2383 0.328125 11.7852 0.902344C12.4141 0.765625 13.043 0.519531 13.5898 0.191406C13.3711 0.875 12.9336 1.42188 12.332 1.77734C12.9062 1.72266 13.4805 1.55859 13.9727 1.33984C13.5898 1.91406 13.0977 2.40625 12.5508 2.81641Z"
            fill="darkgreen"
          />
        </svg>
          </Link>
          <Link href="#" aria-label="Instagram" className="text-[#1E2B12] hover:text-[#5C7A2E]">
            <svg
          width="20"
          height="20"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.125 2.98047C5.5599 2.98047 5.03125 3.1263 4.53906 3.41797C4.0651 3.69141 3.68229 4.07422 3.39062 4.56641C3.11719 5.04036 2.98047 5.5599 2.98047 6.125C2.98047 6.6901 3.11719 7.21875 3.39062 7.71094C3.68229 8.1849 4.0651 8.56771 4.53906 8.85938C5.03125 9.13281 5.5599 9.26953 6.125 9.26953C6.6901 9.26953 7.20964 9.13281 7.68359 8.85938C8.17578 8.56771 8.55859 8.1849 8.83203 7.71094C9.1237 7.21875 9.26953 6.6901 9.26953 6.125C9.26953 5.5599 9.1237 5.04036 8.83203 4.56641C8.55859 4.07422 8.17578 3.69141 7.68359 3.41797C7.20964 3.1263 6.6901 2.98047 6.125 2.98047ZM6.125 8.17578C5.5599 8.17578 5.07682 7.97526 4.67578 7.57422C4.27474 7.17318 4.07422 6.6901 4.07422 6.125C4.07422 5.5599 4.27474 5.07682 4.67578 4.67578C5.07682 4.27474 5.5599 4.07422 6.125 4.07422C6.6901 4.07422 7.17318 4.27474 7.57422 4.67578C7.97526 5.07682 8.17578 5.5599 8.17578 6.125C8.17578 6.6901 7.97526 7.17318 7.57422 7.57422C7.17318 7.97526 6.6901 8.17578 6.125 8.17578ZM10.1445 2.84375C10.1263 3.04427 10.0443 3.21745 9.89844 3.36328C9.77083 3.50911 9.60677 3.58203 9.40625 3.58203C9.20573 3.58203 9.03255 3.50911 8.88672 3.36328C8.74089 3.21745 8.66797 3.04427 8.66797 2.84375C8.66797 2.64323 8.74089 2.47005 8.88672 2.32422C9.03255 2.17839 9.20573 2.10547 9.40625 2.10547C9.60677 2.10547 9.77995 2.17839 9.92578 2.32422C10.0716 2.47005 10.1445 2.64323 10.1445 2.84375ZM12.2227 3.58203C12.1862 3.05339 12.1042 2.59766 11.9766 2.21484C11.8125 1.75911 11.5573 1.36719 11.2109 1.03906C10.8828 0.692708 10.4909 0.4375 10.0352 0.273438C9.65234 0.145833 9.19661 0.0729167 8.66797 0.0546875C8.15755 0.0182292 7.3099 0 6.125 0C4.9401 0 4.08333 0.0182292 3.55469 0.0546875C3.04427 0.0729167 2.59766 0.145833 2.21484 0.273438C1.75911 0.4375 1.35807 0.692708 1.01172 1.03906C0.683594 1.36719 0.4375 1.75911 0.273438 2.21484C0.145833 2.59766 0.0638021 3.05339 0.0273438 3.58203C0.00911458 4.09245 0 4.9401 0 6.125C0 7.3099 0.00911458 8.16667 0.0273438 8.69531C0.0638021 9.20573 0.145833 9.65234 0.273438 10.0352C0.4375 10.4909 0.683594 10.8919 1.01172 11.2383C1.35807 11.5664 1.75911 11.8034 2.21484 11.9492C2.59766 12.0951 3.04427 12.1771 3.55469 12.1953C4.08333 12.2318 4.9401 12.25 6.125 12.25C7.3099 12.25 8.15755 12.2318 8.66797 12.1953C9.19661 12.1771 9.65234 12.1042 10.0352 11.9766C10.4909 11.8125 10.8828 11.5664 11.2109 11.2383C11.5573 10.8919 11.8125 10.4909 11.9766 10.0352C12.1042 9.65234 12.1771 9.20573 12.1953 8.69531C12.2318 8.16667 12.25 7.3099 12.25 6.125C12.25 4.9401 12.2409 4.09245 12.2227 3.58203ZM10.9102 9.73438C10.6914 10.2812 10.2995 10.6732 9.73438 10.9102C9.44271 11.0195 8.95052 11.0924 8.25781 11.1289C7.875 11.1471 7.3099 11.1562 6.5625 11.1562H5.6875C4.95833 11.1562 4.39323 11.1471 3.99219 11.1289C3.31771 11.0924 2.82552 11.0195 2.51562 10.9102C1.96875 10.6914 1.57682 10.2995 1.33984 9.73438C1.23047 9.42448 1.15755 8.93229 1.12109 8.25781C1.10286 7.85677 1.09375 7.29167 1.09375 6.5625V5.6875C1.09375 4.95833 1.10286 4.39323 1.12109 3.99219C1.15755 3.29948 1.23047 2.80729 1.33984 2.51562C1.55859 1.95052 1.95052 1.55859 2.51562 1.33984C2.82552 1.23047 3.31771 1.15755 3.99219 1.12109C4.39323 1.10286 4.95833 1.09375 5.6875 1.09375H6.5625C7.29167 1.09375 7.85677 1.10286 8.25781 1.12109C8.95052 1.15755 9.44271 1.23047 9.73438 1.33984C10.2995 1.55859 10.6914 1.95052 10.9102 2.51562C11.0195 2.80729 11.0924 3.29948 11.1289 3.99219C11.1471 4.375 11.1562 4.9401 11.1562 5.6875V6.5625C11.1562 7.29167 11.1471 7.85677 11.1289 8.25781C11.0924 8.93229 11.0195 9.42448 10.9102 9.73438Z"
            fill="darkgreen"
          />
        </svg>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderMenu;