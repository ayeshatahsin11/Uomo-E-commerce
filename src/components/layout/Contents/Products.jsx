import React from 'react'
import Container from '../Container'
import Titles from '@/components/common/Titles'
import Nav_Tabs from '@/components/common/Nav&Tabs'

const Products = () => {
  return (
   <>
    <section className='mt-24.25 mb-25'>
        <Container>
           <div className='flex items-center justify-between'> 
             <Titles name="featured products"/>
            <Nav_Tabs/>
           </div>
        </Container>
    </section>
 </>
  )
}

export default Products