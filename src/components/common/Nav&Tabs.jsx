// // api banao shob apge, text er jnno truncate use koro and image er jnno obeject-contain and next js e domain name cofig

"use client";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCards from "./ProductCards";

const Nav_Tabs = () => {
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
      <Tabs defaultValue="Best Sellers">
        <div className="absolute top-2.75 md:right-0">
          <TabsList
            className="mb-5 md:mb-0 mt-10 md:mt-0 flex-wrap justify-start!"
            variant="line"
          >
            <TabsTrigger
              className="text-primary-gray text-[14px] md:text-[16px] font-medium after:w-[50%] px-0 after:duration-300 cursor-pointer flex-none justify-start!"
              value="Best Sellers"
            >
              Best Sellers
            </TabsTrigger>
            <TabsTrigger
              className="text-primary-gray text-[14px] md:text-[16px] font-medium after:w-[50%] px-0 after:duration-300 ml-5  md:ml-12 cursor-pointer flex-none justify-start!"
              value="Most Popular"
            >
              Most Popular
            </TabsTrigger>
            <TabsTrigger
              className="text-primary-gray text-[14px] md:text-[16px] font-medium after:w-[50%] px-0 after:duration-300 ml-5  md:ml-12 cursor-pointer flex-none justify-start!"
              value="Top 20"
            >
              Top 20
            </TabsTrigger>
            <TabsTrigger
              className="text-primary-gray text-[14px] md:text-[16px] font-medium after:w-[50%] px-0 after:duration-300 ml-5  md:ml-12 cursor-pointer flex-none justify-start!"
              value="Best Rated"
            >
              Best Rated
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="Best Sellers">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-y-7.5 mt-20 md:mt-8.75">
            {products.slice(0, 15).map((product) => (
              <ProductCards key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="Most Popular">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-y-7.5 mt-20 md:mt-8.75">
            {products.slice(0, 10).map((product) => (
              <ProductCards key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="Top 20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-y-7.5 mt-20 md:mt-8.75">
            {products.slice(0, 8).map((product) => (
              <ProductCards key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="Best Rated">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-y-7.5 mt-20 md:mt-8.75">
            {products.slice(0, 3).map((product) => (
              <ProductCards key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Nav_Tabs;
