import React from "react";
import { UserRound } from "lucide-react";
import HeaderMenu from "./HeaderMenu";
import HeaderCart from "./HeaderCart";
import HeaderWishlist from "./HeaderWishlist";

const NavIcons = () => {
  return (
    <div className="ml-auto flex gap-7.5">
      <button className="cursor-pointer">
        <UserRound size={20} color="white" />
      </button>
    <HeaderWishlist/>
     <HeaderCart/>
     <HeaderMenu/>
    </div>
  );
};

export default NavIcons;

//width and height same hole we can use size attribute
