"use client";
import React from "react";
import Container from "../Container";
import BannerImg from "../../../app/assests/Images/BannerImage.png";
import BannerItem from "../../../app/assests/Images/bannerItem-image.png";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from "next/image";
import { ChevronRight, ChevronLeft } from 'lucide-react';
const Banner = () => {
  return (
    <>
      <section
        style={{ background: `url(${BannerImg.src})` }}
        className="h-auto"
      >
        <Container>
         <Swiper navigation={{
          nextEl : ".custom-next",
          prevEl : ".custom-prev"
         }}
         pagination= {true}
         modules={[Navigation,Pagination]} loop={true}>
          <SwiperSlide>
             <div className="flex justify-between pt-31 pb-26.75">
            <div>
              <h5 className=" pl-13.25 mt-13 relative font-medium text-sm text-primary leading-6 uppercase after::content-[''] after:w-10 after:h-0.5 after:bg-primary after:absolute after:top-2/4 after:translate-y-[-50%] after:left-0">
                shop our freshest
              </h5>
              <h2 className="font-bold text-secondary text-[50px] leading-15 mt-2.75">
                Fresh Hand-Picked Vegetables{" "}
                <span className="text-primary">Everyday</span>
              </h2>
              <Link
                href="#"
                className="font-medium mt-5 text-primary-black text-sm leading-6 cursor-pointer uppercase relative after:content-[''] after:w-0 hover:after:w-28 after:h-0.5 after:bg-primary-black after:absolute after:-bottom-1 after:left-0 after:duration-300"
              >
                Discover more
              </Link>
            </div>
            <div>
              <Image
                src={BannerItem}
                alt="banner-item"
                width={518}
                height={329}
              />
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
             <div className="flex justify-between pt-[124px] pb-[107px]">
            <div>
              <h5 className=" pl-13.25 mt-13 relative font-medium text-sm text-primary leading-6 uppercase after::content-[''] after:w-10 after:h-0.5 after:bg-primary after:absolute after:top-2/4 after:translate-y-[-50%] after:left-0">
                shop our freshest
              </h5>
              <h2 className="font-bold text-secondary text-[50px] leading-15 mt-2.75">
                Fresh Hand-Picked Vegetables{" "}
                <span className="text-primary">Everyday</span>
              </h2>
              <Link
                href="#"
                className="font-medium mt-5 text-primary-black text-sm leading-6 cursor-pointer uppercase relative after:content-[''] after:w-0 hover:after:w-28 after:h-0.5 after:bg-primary-black after:absolute after:-bottom-1 after:left-0 after:duration-300"
              >
                Discover more
              </Link>
            </div>
            <div>
              <Image
                src={BannerItem}
                alt="banner-item"
                width={518}
                height={329}
              />
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
             <div className="flex justify-between pt-31 pb-26.75">
            <div>
              <h5 className=" pl-13.25 mt-13 relative font-medium text-sm text-primary leading-6 uppercase after::content-[''] after:w-10 after:h-0.5 after:bg-primary after:absolute after:top-2/4 after:translate-y-[-50%] after:left-0">
                shop our freshest
              </h5>
              <h2 className="font-bold text-secondary text-[50px] leading-15 mt-2.75">
                Fresh Hand-Picked Vegetables{" "}
                <span className="text-primary">Everyday</span>
              </h2>
              <Link
                href="#"
                className="font-medium mt-5 text-primary-black text-sm leading-6 cursor-pointer uppercase relative after:content-[''] after:w-0 hover:after:w-28 after:h-0.5 after:bg-primary-black after:absolute after:-bottom-1 after:left-0 after:duration-300"
              >
                Discover more
              </Link>
            </div>
            <div>
              <Image
                src={BannerItem}
                alt="banner-item"
                width={518}
                height={329}
              />
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
             <div className="flex justify-between pt-[124px] pb-[107px]">
            <div>
              <h5 className=" pl-13.25 mt-13 relative font-medium text-sm text-primary leading-6 uppercase after::content-[''] after:w-10 after:h-0.5 after:bg-primary after:absolute after:top-2/4 after:translate-y-[-50%] after:left-0">
                shop our freshest
              </h5>
              <h2 className="font-bold text-secondary text-[50px] leading-15 mt-2.75">
                Fresh Hand-Picked Vegetables{" "}
                <span className="text-primary">Everyday</span>
              </h2>
              <Link
                href="#"
                className="font-medium mt-5 text-primary-black text-sm leading-6 cursor-pointer uppercase relative after:content-[''] after:w-0 hover:after:w-28 after:h-0.5 after:bg-primary-black after:absolute after:-bottom-1 after:left-0 after:duration-300"
              >
                Discover more
              </Link>
            </div>
            <div>
              <Image
                src={BannerItem}
                alt="banner-item"
                width={518}
                height={329}
              />
            </div>
          </div>
          </SwiperSlide>
         </Swiper>
         <button className="custom-prev rounded-full size-11.25 bg-white flex justify-center items-center absolute top-2/4 translate-y-[-50%] left-15.25"><ChevronLeft/></button>
         <button className="custom-next rounded-full size-11.25 bg-white flex justify-center items-center absolute top-2/4 translate-y-[-50%] right-15.25"><ChevronRight/></button>
        </Container>
      </section>
    </>
  );
};

export default Banner;


