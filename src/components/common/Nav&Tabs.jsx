import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCards from "./ProductCards";

const Nav_Tabs = () => {
  return (
    <>
      <Tabs defaultValue="overview">
        <div className="absolute top-2.75 right-0">
          <TabsList variant="line">
            <TabsTrigger
              className="text-primary-gray text-[16px] font-medium after:w-[50%] px-0  after:duration-300"
              value="Best Sellers"
            >
              Best Sellers
            </TabsTrigger>
            <TabsTrigger
              className="text-primary-gray text-[16px] font-medium after:w-[50%] px-0 ml-13.5 after:duration-300"
              value="Most Popular"
            >
              Most Popular
            </TabsTrigger>
            <TabsTrigger
              className="text-primary-gray text-[16px] font-medium after:w-[50%] px-0 ml-13.5 after:duration-300"
              value="Top 20"
            >
              Top 20
            </TabsTrigger>
            <TabsTrigger
              className="text-primary-gray text-[16px] font-medium after:w-[50%] px-0 ml-13.5 after:duration-300"
              value="Best Rated"
            >
              Best Rated
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="Best Sellers">
          <div className="grid grid-cols-5 ">
            {Array.from({ length: 15 }).map((_, index) => (
              <ProductCards />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="Most Popular">
          <div className="grid grid-cols-5 ">
            {Array.from({ length: 10 }).map((_, index) => (
              <ProductCards />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="Top 20">
          <div className="grid grid-cols-5 ">
            {Array.from({ length: 8 }).map((_, index) => (
              <ProductCards />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="Best Rated">
          <div className="grid grid-cols-5 ">
            {Array.from({ length: 3 }).map((_, index) => (
              <ProductCards />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Nav_Tabs;


// api banao shob apge, text er jnno truncate use koro and image er jnno obeject-contain and next js e domain name cofig