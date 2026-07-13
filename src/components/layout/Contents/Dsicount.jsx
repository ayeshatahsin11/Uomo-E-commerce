import React from "react";
import Container from "../Container";
import Titles from "@/components/common/Titles";
import DiscountProducts from "./DiscountProducts";

const Dsicount = () => {
  return (
    <section className="mt-25">
      <Container>
        <Titles name="Discount" />

        <div className="mt-4 md:mt-8.75 md:flex gap-8.5">
          <div className="w-70 py-1 ml-1  md:ml-0  md:w-63.75 md:h-89 bg-primary rounded-sm text-white text-center flex flex-col justify-center">
          <div className="flex md:block justify-center gap-1">
              <h3 className="font-bold text-[20px] md:text-[35px] ">$20</h3>
            <h4 className="capitalize mt-1 text-[15px] md:text-[26px]">
              under prodcuts
            </h4>
          </div>
            <h5 className="capitalize mt-1 text-sm">limited time only</h5>
          </div>
          <DiscountProducts />
        </div>
      </Container>
    </section>
  );
};

export default Dsicount;
