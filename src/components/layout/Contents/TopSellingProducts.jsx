// "use client"
// import { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Pagination } from 'swiper/modules';
// import "swiper/css/pagination";
// import ProductCards from "@/components/common/ProductCards";
// import React from 'react'
// import Container from '../Container'

// const TopSellingProducts = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const res = await fetch("/api/products"); // lowercase, matches folder
//       const data = await res.json();
//       setProducts(data);
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <>
//       <Container>
//         <div className="mt-8.75">
//           <Swiper
//             modules={[Pagination]}
//             pagination={{ clickable: true }}
//             spaceBetween={16}
//             slidesPerView={2} // default (mobile) - eta base/fallback
//             breakpoints={{
//               // 0px theke 639px porjonto (mobile)
//               0: {
//                 slidesPerView: 2,
//                 spaceBetween: 20,
//               },
//               // 640px theke 1023px (tablet)
//               640: {
//                 slidesPerView: 3,
//                 spaceBetween: 16,
//               },
//               // 1024px+ (desktop)
//               1024: {
//                 slidesPerView: 5,
//                 spaceBetween: 20,
//               },
//             }}
//           >
//             {products?.map((product) => (
//               <SwiperSlide key={product.id}>
//                 <ProductCards product={product} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </Container>
//     </>
//   )
// }

// export default TopSellingProducts

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
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div id="topselling">
      <Container>
        <div className="mt-8.75 overflow-hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={2}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
          >
            {products?.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCards product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  )
}

export default TopSellingProducts