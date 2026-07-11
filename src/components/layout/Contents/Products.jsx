import React from "react";
import Container from "../Container";
import Titles from "@/components/common/Titles";
import Nav_Tabs from "@/components/common/Nav&Tabs";

const Products = () => {
  return (
    <>
      <section className="mt-10 md:mt-24.25 md:mb-25 mb-10">
        <Container className="relative">
          <Titles name="featured products" />
          <Nav_Tabs />
        </Container>
      </section>
    </>
  );
};

export default Products;
