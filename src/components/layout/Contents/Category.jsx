import React from 'react'
import Container from '../Container'
import Titles from '@/components/common/Titles'
import CategoryCards from '@/components/common/CategoryCards'

const Category = () => {
  return (
   <section className=' bg-[#F7F5EE] pt-10 md:pt-25 md:pb-23 pb-10'>
    <Container>
<div className='flex flex-wrap md:flex-nowrap gap-y-3 md:gap-y-0  justify-between items-center'>
      <Titles name="shop by category"/>
        <button className="text-primary-black cursor-pointer text-[16px] font-medium relative uppercase after:content-[''] after:w-0 hover:after:w-2/4 after:h-1 after:bg-primary-black after:absolute after:-bottom-1 after:left-0 after:duration-300">Shop All Categories</button>
   
</div>
<CategoryCards/>
       </Container>
   </section>
  )
}

export default Category

