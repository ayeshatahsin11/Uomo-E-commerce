"use client"
import { useState, useEffect } from 'react'
import React from 'react'
import Container from '../Container'
import Image from 'next/image'

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
         <div className='flex gap-7.5 mt-8.5 text-center'>
           {blog?.map((item)=>(
            <div key={item.id} className='group'>
               <div className="relative w-82.5 h-55 overflow-hidden">
              <Image
                src={item?.image}
                alt={item.about}
                fill
                sizes="330px"
                className="object-contain cursor-pointer"
              />
            </div>
            <h3>{item?.author}</h3>
            <h4>{item?.date}</h4>
            <h2>{item?.about}</h2>
           </div>
           ))}
        </div>
    </Container>
    </>
  )
}

export default BlogNews