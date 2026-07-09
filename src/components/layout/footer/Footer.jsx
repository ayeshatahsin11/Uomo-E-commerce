import React from "react";
import Container from "../Container";
import Info from "./Info";
import FooterColumns from "./FooterColumns";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <section className="bg-secondary text-white pt-26 pb-43">
      <Container>
        <div id="main grid part" className="flex justify-between">
          <Info />
          <FooterColumns />
          <Subscribe />
        </div>
      </Container>
    </section>
  );
};

export default Footer;


