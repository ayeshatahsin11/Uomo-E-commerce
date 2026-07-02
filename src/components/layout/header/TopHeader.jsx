import Logo from '@/components/common/Logo'

import React from 'react'
import Container from '../Container'
import SearchInput from './SearchInput'
import NavIcons from './NavIcons'

const TopHeader = () => {
  return (
 <>

  <div className='bg-secondary'>

    <Container>
     <div className='flex items-center gap-8.25 py-5'>
       <Logo/>
      <SearchInput/>
     <NavIcons/>
     </div>
    </Container>
 </div>

 </>
  )
}

export default TopHeader