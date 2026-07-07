import React from "react";
import Container from "../Container";
import Titles from "@/components/common/Titles";
import DiscountProducts from "./DiscountProducts";

const Dsicount = () => {
  return (
    <section className="mt-25">
      <Container>
        <Titles name="Discount" />
   
          <div className="mt-8.75 flex gap-8.5">
          <div className="w-63.75 h-89 bg-primary rounded-sm text-white text-center flex flex-col justify-center">
            <h3 className="font-bold text-[35px] ">$20</h3>
            <h4 className="capitalize mt-1 text-[26px]">under prodcuts</h4>
            <h5 className="capitalize mt-1 text-sm">limited time only</h5>
          </div>
        <DiscountProducts/>
        </div>
      
      </Container>
    </section>
  );
};

export default Dsicount;
