"use client";
import { useState, useEffect } from "react";
import React from "react";
import Container from "../layout/Container";
import Image from "next/image";

const CategoryCards = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      const res = await fetch("/api/category"); // lowercase, matches folder
      const data = await res.json();
      setCategory(data);
    };
    fetchCategory();
  }, []);

  return (
    <>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-7 md:mt-10 text-center">
          {category?.map((item) => (
            <div key={item.id} className="group">
              <div className="relative md:w-65 h-55 overflow-hidden">
                <Image
                  src={item?.image}
                  alt={item.name}
                  fill
                  sizes="260px"
                  className="object-contain cursor-pointer"
                />
              </div>
              <h3 className="font-medium text-[16px] text-primary-black md:mt-5">
                {item.name}
              </h3>
              <h4 className="text-primary-gray text-sm opacity-0 group-hover:opacity-100 duration-200">
                {item.quantity} Products
              </h4>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default CategoryCards;
