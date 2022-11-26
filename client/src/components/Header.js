import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div
      className='h-28'
    >
      <div className='h-1/2 border-b-2 border-[#f5f5f5] '>3HCR</div>
      <div className='h-1/2 border-b-2 border-[#f5f5f5] '>
        <NavBar />
      </div>
    </div>
  )
}

export default Header