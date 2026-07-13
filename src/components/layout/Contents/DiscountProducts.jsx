// "use client";
// import { useState, useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import ProductCards from "@/components/common/ProductCards";
// import React from "react";
// import Container from "../Container";
// import { ChevronRight, ChevronLeft } from "lucide-react";

// const DiscountProducts = () => {
//   const [products, setProducts] = useState([]);
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const res = await fetch("/api/products");
//       const data = await res.json();
//       setProducts(data);
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <>
//       <section>
//         <Container>
//           <div className="md:w-281 mt-5 md:mt-0 relative">
//             <Swiper
//               slidesPerView={4}
//               modules={[Navigation]}
//               loop={true}
//               navigation={{
//                 prevEl: prevRef.current,
//                 nextEl: nextRef.current,
//               }}
//               onBeforeInit={(swiper) => {
//                 swiper.params.navigation.prevEl = prevRef.current;
//                 swiper.params.navigation.nextEl = nextRef.current;
//               }}
//             >
//               {products?.map((product) => (
//                 <SwiperSlide key={product.id}>
//                   <ProductCards product={product} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             <button
//               ref={prevRef}
//               className="rounded-full cursor-pointer size-11.25 bg-[#E4E4E4] flex justify-center items-center absolute top-1/2 -translate-y-1/2 -left-5! z-10 opacity-50 hover:opacity-100 duration-200"
//             >
//               <ChevronLeft />
//             </button>
//             <button
//               ref={nextRef}
//               className="rounded-full cursor-pointer size-11.25 bg-[#E4E4E4] flex justify-center items-center absolute top-1/2 -translate-y-1/2 right-0 z-10 opacity-50 hover:opacity-100 duration-200"
//             >
//               <ChevronRight />
//             </button>
//           </div>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default DiscountProducts;

"use client";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductCards from "@/components/common/ProductCards";
import React from "react";
import Container from "../Container";
import { ChevronRight, ChevronLeft } from "lucide-react";

const DiscountProducts = () => {
  const [products, setProducts] = useState([]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <section>
        <Container>
          <div className="md:w-281 mt-5 mb-5 md:mb-0 md:mt-0 relative">
            <Swiper
              modules={[Navigation]}
              loop={true}
              spaceBetween={12}
              slidesPerView={2}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
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
                  slidesPerView: 4,
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

            <button
              ref={prevRef}
              className="rounded-full cursor-pointer size-8 md:size-11.25 bg-[#E4E4E4] flex justify-center items-center absolute top-1/2 -translate-y-1/2 -left-2.5 md:-left-5! z-10 opacity-70 md:opacity-50 hover:opacity-100 duration-200"
            >
              <ChevronLeft className="size-4 md:size-5" />
            </button>
            <button
              ref={nextRef}
              className="rounded-full cursor-pointer size-8 md:size-11.25 bg-[#E4E4E4] flex justify-center items-center absolute top-1/2 -translate-y-1/2 -right-2.5 md:-right-2! z-10 opacity-70 md:opacity-50 hover:opacity-100 duration-200"
            >
              <ChevronRight className="size-4 md:size-5" />
            </button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default DiscountProducts;
