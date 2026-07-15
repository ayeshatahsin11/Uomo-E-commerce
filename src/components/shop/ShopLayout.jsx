import React from "react";
import Container from "../layout/Container";
import Breadcrumb from "../common/BreadCrumb";
import SortandView from "./SortandView";
import ShopProducts from "./ShopProducts";

const ShopLayout = () => {
  return (
    <div className="mt-9 mb-5">
      <Container className="flex gap-15 items-center">
        <aside className="w-75">sidebar</aside>
        <div className="w-full ">
         <div className="items-center flex justify-between">
             <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "The Shop" }, // current page - href dorkar nai
            ]}
            />
            <SortandView/>
         </div>
         <ShopProducts/>
        </div>
      </Container>
    </div>
  );
};

export default ShopLayout;
