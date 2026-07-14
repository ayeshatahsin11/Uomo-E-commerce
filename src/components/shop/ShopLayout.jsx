import React from 'react'
import Container from '../layout/Container'
import Breadcrumb from '../common/BreadCrumb'

const ShopLayout = () => {
  return (
    <>
    <Container className="flex gap-15">
        <aside className='w-75'>
            sidebar
        </aside>
        <div className='w-full'>
              <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "The Shop" }, // current page - href dorkar nai
          ]}
        />
        </div>
    </Container>
    </>
  )
}

export default ShopLayout

