// import Logo from '@/components/common/Logo'

// import React from 'react'
// import Container from '../Container'
// import SearchInput from './SearchInput'
// import NavIcons from './NavIcons'
// import { Menu } from 'lucide-react'

// const TopHeader = () => {
//   return (
//  <>

//   <div className='bg-secondary'>

//     <Container>
//      <div className='flex items-center gap-8.25 py-5'>
//        <Logo/>
//        <button className='md:hidden'>
//         <Menu/>
//        </button>
//       <SearchInput/>
//      <NavIcons/>
//      </div>
//     </Container>
//  </div>

//  </>
//   )
// }

// export default TopHeader

import Logo from '@/components/common/Logo'
import React from 'react'
import Container from '../Container'
import SearchInput from './SearchInput'
import NavIcons from './NavIcons'

const TopHeader = () => {
  return (
    <div className='bg-secondary'>
      <Container>
        <div className='flex items-center gap-4 md:gap-8.25 py-4 md:py-5'>
          <Logo />
          <SearchInput />
          <NavIcons />
        </div>
      </Container>
    </div>
  )
}

export default TopHeader