"use client";
import { useState, useEffect } from "react";
import React from "react";
import Container from "../Container";
import Image from "next/image";

const BlogNews = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch("/api/blog"); // lowercase, matches folder
      const data = await res.json();
      setBlog(data);
    };
    fetchBlog();
  }, []);

  return (
    <>
      <Container>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-7.5 mt-8.5">
          {blog?.map((item) => (
            <div key={item.id} className="md:w-82.5 h-auto bg-white">
              <div className="relative md:w-82.5 h-55 overflow-hidden">
                <Image
                  src={item?.image}
                  alt={item.about}
                  fill
                  sizes="330px"
                  className="object-cover md:object-contain cursor-pointer"
                />
              </div>
              <div className="pt-6  pb-5 pl-7.75 pr-15">
                <div className="md:flex gap-6.5 text-[12px] md:text-sm text-primary-gray md:leading-6 md:mt-6 uppercase">
                  <h3>By {item?.author}</h3>
                  <h4>{item?.date}</h4>
                </div>
                <h2 className="text-sm md:text-[18px] text-primary-black mt-1">
                  {item?.about}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default BlogNews;
