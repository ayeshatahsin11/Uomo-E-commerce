import React from "react";
import Container from "../Container";
import BannerImg from "../../../app/assests/Images/BannerImage.png";
const Banner = () => {
  return (
    <>
      <section style={{ background: `url(${BannerImg.src})`  }} className="h-100">
        <Container>
            <div>
                <div>
                    <h5>shop our freshest</h5>
                    <h2>Fresh Hand-picked Vegetable Everyday</h2>
                </div>
            </div>
        </Container>
      </section>
    </>
  );
};

export default Banner;
