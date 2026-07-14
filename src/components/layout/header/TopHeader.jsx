import Logo from '@/components/common/Logo'
import React from 'react'
import Container from '../Container'
import SearchInput from './SearchInput'
import NavIcons from './NavIcons'

const TopHeader = ({ isScrolled }) => {
  return (
    <div className={`bg-secondary ${isScrolled ? 'shadow-md' : ''}`}>
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


