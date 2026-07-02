import React from "react";
import { UserRound } from "lucide-react";
import { Heart } from "lucide-react";
import { Handbag } from "lucide-react";
import { Menu } from "lucide-react";
const NavIcons = () => {
  return (
    <div className="ml-auto flex gap-7.5">
      <button className="cursor-pointer">
        <UserRound size={20} color="white" />
      </button>
      <button className="cursor-pointer">
        <Heart size={20} color="white" />
      </button>
      <button className="relative cursor-pointer">
        <Handbag size={20} color="white" />
        <span className="size-4 rounded-full bg-primary text-white font-medium text-[10px] absolute -bottom-1.25 -right-2.5">
          3
        </span>
      </button>
      <button className="cursor-pointer">
        <Menu size={20} color="white" />
      </button>
    </div>
  );
};

export default NavIcons;

//width and height same hole we can use size attribute
