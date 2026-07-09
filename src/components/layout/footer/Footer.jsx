import React from "react";
import Container from "../Container";
import Info from "./Info";
import FooterColumns from "./FooterColumns";

const Footer = () => {
  return (
    <section className="bg-secondary text-white mb-25">
      <Container>
        <div id="main grid part">
          <Info />
          <FooterColumns/>
        </div>
      </Container>
    </section>
  );
};

export default Footer;



