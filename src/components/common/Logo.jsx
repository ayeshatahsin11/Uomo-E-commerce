import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <>
      <Image src="/images/logo.png" alt="logo" width={111.55} height={27.01} className="cursor-pointer" />
    </>
  );
};

export default Logo;
