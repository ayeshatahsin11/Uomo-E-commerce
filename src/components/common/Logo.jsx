import Image from "next/image";
import React from "react";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/" aria-label="logo">
      <Image src="/images/logo.png" alt="logo" width={111.55} height={27.01} className="cursor-pointer" />
    </Link>
  );
};

export default Logo;
