import React from "react";
import Container from "../Container";
import Titles from "@/components/common/Titles";
import BlogNews from "./BlogNews";

const Blog = () => {
  return (
    <section className="mt-25 bg-[#F7F5EE] pt-10 md:pt-22.75 pb-10 md:pb-25.5">
      <Container>
        <div className="md:flex justify-between items-center">
          <Titles name="latest blog" />
          <button className="text-primary-black mt-5 md:mt-0 cursor-pointer text-[16px] font-medium relative uppercase after:content-[''] after:w-0 hover:after:w-full after:h-0.75 after:bg-primary-black after:absolute after:-bottom-1 after:left-0 after:duration-300">
            see all blogs
          </button>
        </div>
        <BlogNews />
      </Container>
    </section>
  );
};

export default Blog;
