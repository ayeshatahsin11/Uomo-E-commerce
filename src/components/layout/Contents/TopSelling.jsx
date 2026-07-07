"use client"
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import "swiper/css/pagination";
import React from "react";
import Container from "../Container";
import Titles from "@/components/common/Titles";
import ProductCards from "@/components/common/ProductCards";

const TopSelling = () => {
     const [products, setProducts] = useState([]);
    
      useEffect(() => {
        const fetchProducts = async () => {
          const res = await fetch("/api/products"); // lowercase, matches folder
          const data = await res.json();
          setProducts(data);
        };
        fetchProducts();
      }, []);
  return (
    <section className="mt-22.75 mb-10">
      <Container>
     <div className="flex justify-between items-center">
           <Titles name="Top selling products" />
        <button className="text-primary-black cursor-pointer text-[16px] font-medium relative uppercase after:content-[''] after:w-0 hover:after:w-2/4 after:h-1 after:bg-primary-black after:absolute after:-bottom-1 after:left-0 after:duration-300">
          see all products
        </button>
     </div>
   <div className="mt-8.75">
  <Swiper slidesPerView={5} modules={[Pagination]} pagination={{ clickable: true }} >
    {products?.map((product) => (
      <SwiperSlide key={product.id}>
        <ProductCards product={product} />
      </SwiperSlide>
    ))}
  </Swiper>
</div>
       <div>

       </div>

      </Container>
    </section>
  );
};

export default TopSelling;
