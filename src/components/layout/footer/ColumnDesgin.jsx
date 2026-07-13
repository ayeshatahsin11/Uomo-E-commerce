import Link from "next/link";
import React from "react";

const ColumnDesgin = ({ title, footerlinks }) => {
  return (
    <div className="text-white">
      <h2 className="text-[18px] font-medium uppercase">{title}</h2>
      <div>
        {footerlinks?.map((item) => (
          <ul className="mt-3 md:mt-7">
            <li className="text-sm md:leading-5 relative  after:content-[''] after:w-0 hover:after:w-2/4 after:h-0.5 after:bg-white after:absolute after:-bottom-2 after:left-0 after:duration-300">
              <Link href={"item.href"}>{item.label}</Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ColumnDesgin;
