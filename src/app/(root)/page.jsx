import Blog from "@/components/layout/Contents/Blog";
import Category from "@/components/layout/Contents/Category";
import Contact from "@/components/layout/Contents/Contact";
import Dsicount from "@/components/layout/Contents/Dsicount";
import Priviliges from "@/components/layout/Contents/Priviliges";
import Products from "@/components/layout/Contents/Products";
import TopSelling from "@/components/layout/Contents/TopSelling";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Banner from "@/components/layout/home/Banner";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <Banner/>
      <Priviliges/>
     <Products/>
     <Category/>
     <TopSelling/>
     <Dsicount/>
     <Blog/>
     <Contact/>
    {/* <Footer/> */}
    </>
  );
};

export default page;

// ekhane jei components gulo common rakhar ogulo place krbo
