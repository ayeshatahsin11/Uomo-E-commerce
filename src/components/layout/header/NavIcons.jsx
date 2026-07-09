import React from "react";

import HeaderMenu from "./HeaderMenu";
import HeaderCart from "./HeaderCart";
import HeaderWishlist from "./HeaderWishlist";
import HeaderUser from "./HeaderUser";

const NavIcons = () => {
  return (
    <div className="ml-auto flex gap-7.5">
    <HeaderUser/>
    <HeaderWishlist/>
     <HeaderCart/>
     <HeaderMenu/>
    </div>
  );
};

export default NavIcons;

//width and height same hole we can use size attribute
