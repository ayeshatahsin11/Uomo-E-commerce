import React from "react";
import { UserRound } from "lucide-react";
import { Heart } from "lucide-react";

import HeaderMenu from "./HeaderMenu";
import HeaderCart from "./HeaderCart";

const NavIcons = () => {
  return (
    <div className="ml-auto flex gap-7.5">
      <button className="cursor-pointer">
        <UserRound size={20} color="white" />
      </button>
      <button className="cursor-pointer">
        <Heart size={20} color="white" />
      </button>
     <HeaderCart/>
     <HeaderMenu/>
    </div>
  );
};

export default NavIcons;

//width and height same hole we can use size attribute
