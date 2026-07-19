"use client";
import React, { useEffect } from "react";
import Container from "../Container";
import BannerImg from "../../../app/assests/Images/BannerImage.png";
import BannerItem from "../../../app/assests/Images/bannerItem-image.png";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import axios from "axios";
const Banner = () => {
  useEffect(()=>{
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/banner/getbanners`).then((res)=>{
          console.log(res);
          
    }).catch((err)=>{
      console.log(err);
      
    })
  })
  return (
    <>
      <section
        id="banner"
        style={{ background: `url(${BannerImg.src})` }}
        className="h-auto relative pb-10 md:pb-0"
      >
        <Container>
          <Swiper
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            loop={true}
          >
            <SwiperSlide>
              <div className="flex  justify-between pt-5 md:pt-31 pb-26.75">
                <div>
                  <h5 className="pl-10 md:pl-13.25 mt-13  relative font-medium text-[13px] md:text-sm text-primary leading-6 uppercase after::content-[''] after:w-8 md:after:w-10 after:h-0.5 after:bg-primary after:absolute after:top-2/4 after:translate-y-[-50%] after:left-0">
                    shop our freshest
                  </h5>
                  <h2 className="font-bold text-secondary text-[30px] md:text-[50px] leading-10 md:leading-15 mt-2.75">
                    Fresh Hand-Picked Vegetables{" "}
                    <span className="text-primary">Everyday</span>
                  </h2>
                  <button className="font-medium mt-5! text-primary-black text-sm leading-6 cursor-pointer uppercase relative after:content-[''] after:w-0 hover:after:w-28 after:h-0.5 after:bg-primary-black after:absolute after:-bottom-1 after:left-0 after:duration-300">
                    <Link href="#">Discover more</Link>
                  </button>
                </div>
                <div>
                  <Image
                    src={BannerItem}
                    alt="banner-item"
                    className="mt-33 sm:mt-20 md:mt-0"
                    width={518}
                    height={329}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex  justify-between pt-5 md:pt-31 pb-26.75">
                <div>
                  <h5 className="pl-10 md:pl-13.25 mt-13  relative font-medium text-[13px] md:text-sm text-primary leading-6 uppercase after::content-[''] after:w-8 md:after:w-10 after:h-0.5 after:bg-primary after:absolute after:top-2/4 after:translate-y-[-50%] after:left-0">
                    shop our freshest
                  </h5>
                  <h2 className="font-bold text-secondary text-[30px] md:text-[50px] leading-10 md:leading-15 mt-2.75">
                    Fresh Hand-Picked Vegetables{" "}
                    <span className="text-primary">Everyday</span>
                  </h2>
                  <button className="font-medium mt-5! text-primary-black text-sm leading-6 cursor-pointer uppercase relative after:content-[''] after:w-0 hover:after:w-28 after:h-0.5 after:bg-primary-black after:absolute after:-bottom-1 after:left-0 after:duration-300">
                    <Link href="#">Discover more</Link>
                  </button>
                </div>
                <div>
                  <Image
                    src={BannerItem}
                    alt="banner-item"
                    className="mt-33 sm:mt-20 md:mt-0"
                    width={518}
                    height={329}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex  justify-between pt-5 md:pt-31 pb-26.75">
                <div>
                  <h5 className="pl-10 md:pl-13.25 mt-13  relative font-medium text-[13px] md:text-sm text-primary leading-6 uppercase after::content-[''] after:w-8 md:after:w-10 after:h-0.5 after:bg-primary after:absolute after:top-2/4 after:translate-y-[-50%] after:left-0">
                    shop our freshest
                  </h5>
                  <h2 className="font-bold text-secondary text-[30px] md:text-[50px] leading-10 md:leading-15 mt-2.75">
                    Fresh Hand-Picked Vegetables{" "}
                    <span className="text-primary">Everyday</span>
                  </h2>
                  <button className="font-medium mt-5! text-primary-black text-sm leading-6 cursor-pointer uppercase relative after:content-[''] after:w-0 hover:after:w-28 after:h-0.5 after:bg-primary-black after:absolute after:-bottom-1 after:left-0 after:duration-300">
                    <Link href="#">Discover more</Link>
                  </button>
                </div>
                <div>
                  <Image
                    src={BannerItem}
                    alt="banner-item"
                    className="mt-33 sm:mt-20 md:mt-0"
                    width={518}
                    height={329}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex  justify-between pt-5 md:pt-31 pb-26.75">
                <div>
                  <h5 className="pl-10 md:pl-13.25 mt-13  relative font-medium text-[13px] md:text-sm text-primary leading-6 uppercase after::content-[''] after:w-8 md:after:w-10 after:h-0.5 after:bg-primary after:absolute after:top-2/4 after:translate-y-[-50%] after:left-0">
                    shop our freshest
                  </h5>
                  <h2 className="font-bold text-secondary text-[30px] md:text-[50px] leading-10 md:leading-15 mt-2.75">
                    Fresh Hand-Picked Vegetables{" "}
                    <span className="text-primary">Everyday</span>
                  </h2>
                  <button className="font-medium mt-5! text-primary-black text-sm leading-6 cursor-pointer uppercase relative after:content-[''] after:w-0 hover:after:w-28 after:h-0.5 after:bg-primary-black after:absolute after:-bottom-1 after:left-0 after:duration-300">
                    <Link href="#">Discover more</Link>
                  </button>
                </div>
                <div>
                  <Image
                    src={BannerItem}
                    alt="banner-item"
                    className="mt-33 sm:mt-20 md:mt-0"
                    width={518}
                    height={329}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <button className="custom-prev cursor-pointer rounded-full z-40 size-5 md:size-11.25 bg-white flex justify-center items-center absolute  bottom-4 left-4  md:top-2/4 md:translate-y-[-50%] md:left-15.25! ">
            <ChevronLeft />
          </button>
          <button className="custom-next cursor-pointer rounded-full z-40 size-5 md:size-11.25 bg-white flex justify-center items-center absolute bottom-4 right-60 md:top-2/4 md:translate-y-[-50%] md:right-15.25! ">
            <ChevronRight />
          </button>
        </Container>
      </section>
    </>
  );
};

export default Banner;

