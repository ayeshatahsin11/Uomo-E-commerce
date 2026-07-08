import React from "react";
import Container from "../Container";
import Logo from "@/components/common/Logo";
import Socialicons from "./Socialicons";

const Footer = () => {
  return (
    <section className="bg-secondary text-white mb-25">
      <Container>
        <div id="main grid part">
          <div className="text-sm leading-6 max-w-70.5">
            <Logo/>
            <h3 className="mt-11">1418 River Drive, Suite 35 Cottonhall, CA 9622
United States</h3>
<h4 className="mt-5">sale@uomo.com</h4>
<h5>+1 246-345-0695</h5>
<Socialicons/>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
