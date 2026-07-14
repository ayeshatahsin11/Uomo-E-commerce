import React from "react";
import Container from "../Container";
import Link from "next/link";

const Navbar = ({ isScrolled }) => {
  const navData = [
    { id: 1, name: "HOME" },
    { id: 2, name: "SHOP" },
    { id: 3, name: "COLLECTION" },
    { id: 4, name: "JOURNAL" },
    { id: 5, name: "LOOKBOOK" },
    { id: 6, name: "PAGES" },
    { id: 7, name: "SPECIAL OFFER" },
    { id: 8, name: "PURCHASE THEME" },
  ];

  return (
    <nav
      className={`hidden md:block bg-primary overflow-hidden transition-all duration-300 ease-in-out ${
        isScrolled ? "max-h-0 py-0 opacity-0" : "max-h-25 pt-4.25 pb-3.75 opacity-100"
      }`}
    >
      <Container>
        <ul className="flex text-white gap-11">
          {navData?.map((navlist) => (
            <li
              key={navlist.id}
              className={`font-normal leading-6 relative text-sm after:content-[''] after:w-0 hover:after:w-2/4 after:h-0.5 after:bg-white after:absolute after:bottom-0 after:left-0 after:duration-300 ${
                navlist.id == 7 ? "ml-auto" : ""
              }`}
            >
              <Link href={`${navlist.id}`}>{navlist.name}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;

