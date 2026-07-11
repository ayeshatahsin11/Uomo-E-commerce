import React from "react";

const PriviligeCards = ({ icon, title, description }) => {
  return (
    <>
      <div className="flex gap-2 md:gap-4.5">
        {icon}
        <div >
          <h3 className="text-[12px] md:text-[16px] font-medium text-primary-black">
            {title}
          </h3>
          <h4 className="text-[12px] md:text-[15px] font-normal text-primary-gray mt-1">
            {description}
          </h4>
        </div>
      </div>
    </>
  );
};

export default PriviligeCards;
