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
       <ProductCards/>
        </TabsContent>
        <TabsContent value="Most Popular">
          <p>Here are the popular items</p>
        </TabsContent>
        <TabsContent value="Top 20">
          <p>top products</p>
        </TabsContent>
        <TabsContent value="Best Rated">
          <p>rated highest</p>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Nav_Tabs;
