"use client"
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import "swiper/css/pagination";
import ProductCards from "@/components/common/ProductCards";
import React from 'react'
import Container from '../Container'

const TopSellingProducts = () => {
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
   <>
   <Container>
  <div className="mt-8.75">
  <Swiper slidesPerView={5} modules={[Pagination]} pagination={{ clickable: true }} >
    {products?.map((product) => (
      <SwiperSlide key={product.id}>
        <ProductCards product={product} />
      </SwiperSlide>
    ))}
  </Swiper>
</div>
   </Container>
   </>
  )
}

export default TopSellingProducts

