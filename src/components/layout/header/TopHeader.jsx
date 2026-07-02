import Logo from '@/components/common/Logo'

import React from 'react'
import Container from '../Container'
import SearchInput from './SearchInput'

const TopHeader = () => {
  return (
 <>

  <div className='bg-primary'>

    <Container>
      <Logo/>
      <SearchInput/>
    </Container>
 </div>

 </>
  )
}

export default TopHeader