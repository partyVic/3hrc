import React from 'react'
import NavBar from './navBar/NavBar'

const Header = () => {
  return (
    <div
      className='h-28'
    >
      <div className='h-1/2 border-b-2 border-[#f5f5f5] font-mono'>3HCR</div>
      <div className='h-1/2 border-b-2 border-[#f5f5f5] font-serif'>
        <NavBar />
      </div>
    </div>
  )
}

export default Header