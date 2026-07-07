import React from 'react'
import Container from '../Container'
import Titles from '@/components/common/Titles'
import BlogNews from './BlogNews'

const Blog = () => {
  return (
    <section className='mt-25'>
        <Container>
            <div className="flex justify-between items-center">
           <Titles name="latest blog" />
        <button className="text-primary-black cursor-pointer text-[16px] font-medium relative uppercase after:content-[''] after:w-0 hover:after:w-full after:h-0.75 after:bg-primary-black after:absolute after:-bottom-1 after:left-0 after:duration-300">
          see all blogs
        </button>
     </div>
     <BlogNews/>
        </Container>
    </section>
  )
}

export default Blog