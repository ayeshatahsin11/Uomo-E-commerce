import React from "react";
import Container from "../Container";
import Titles from "@/components/common/Titles";
import TopSellingProducts from "./TopSellingProducts";


const TopSelling = () => {
   
  return (
    <section className="mt-22.75 mb-10" id="topselling">
      <Container>
     <div className="flex justify-between items-center">
           <Titles name="Top selling products" />
        <button className="text-primary-black cursor-pointer text-[16px] font-medium relative uppercase after:content-[''] after:w-0 hover:after:w-2/4 after:h-1 after:bg-primary-black after:absolute after:-bottom-1 after:left-0 after:duration-300">
          see all products
        </button>
     </div>
     <TopSellingProducts/>
      
      </Container>
    </section>
  );
};

export default TopSelling;
