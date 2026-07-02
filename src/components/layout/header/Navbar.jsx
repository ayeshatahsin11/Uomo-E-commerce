import React from "react";
import Container from "../Container";
import Link from "next/link";

const Navbar = () => {
  const navData = [
    {
      id: 1,
      name: "HOME",
    },
    {
      id: 2,
      name: "SHOP",
    },
    {
      id: 3,
      name: "COLLECTION",
    },
    {
      id: 4,
      name: "JOURNAL",
    },
    {
      id: 5,
      name: "LOOKBOOK",
    },
    {
      id: 6,
      name: "PAGES",
    },
  ];
  return (
    <>
      <nav className="bg-primary pt-4.25 pb-3.75">
        <Container>
          <ul className="flex text-white gap-11">
            {navData?.map((navlist) => (
              <li className="font-normal leading-6 relative text-sm after:content-[''] after:w-0 hover:after:w-6.5 after:h-0.5 after:bg-white after:absolute after:bottom-0 after:left-0 after:duration-300">
                <Link href={`${navlist.id}`}>{navlist.name}</Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
