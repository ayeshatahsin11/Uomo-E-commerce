import React from "react";
import Container from "../Container";
import PriviligeCards from "./PriviligeCards";

const Priviliges = () => {
  return (
    <>
      <section className="bg-[#F7F5EE] py-13.5">
        <Container>
          <div className="flex justify-between">
            {Array.from({ length: 4 }).map((_, index) => (
              <PriviligeCards key={index} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Priviliges;
