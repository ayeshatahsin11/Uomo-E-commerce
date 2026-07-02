import Logo from '@/components/common/Logo'

import React from 'react'
import Container from '../Container'
import SearchInput from './SearchInput'

const TopHeader = () => {
  return (
 <>

  <div className='bg-secondary'>

    <Container>
     <div className='flex items-center gap-8.25'>
       <Logo/>
      <SearchInput/>
     </div>
    </Container>
 </div>

 </>
  )
}

export default TopHeader