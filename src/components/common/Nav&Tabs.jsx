import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Nav_Tabs = () => {
  return (
    <>
      <Tabs defaultValue="overview">
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
        <TabsContent value="bestsellers">
          <p>Best Items ever</p>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Nav_Tabs;
