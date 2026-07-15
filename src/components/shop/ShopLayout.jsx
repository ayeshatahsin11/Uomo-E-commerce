import React from "react";
import Container from "../layout/Container";
import Breadcrumb from "../common/BreadCrumb";
import SortandView from "./SortandView";
import ShopProducts from "./ShopProducts";
import ShopSidebar from "./ShopSidebar";

const ShopLayout = () => {
  return (
    <div className="mt-9 mb-5">
      <Container className="flex gap-15 items-start">
        <ShopSidebar className="sticky top-6" />
        <div className="w-full">
          <div className="items-center flex justify-between">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "The Shop" }, // current page - href dorkar nai
              ]}
            />
            <SortandView />
          </div>
          <ShopProducts />
        </div>
      </Container>
    </div>
  );
};

export default ShopLayout;