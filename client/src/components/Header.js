import React from 'react'
import NavBar from './navBar/NavBar'
import HeaderTitle from './headerTitle/HeaderTitle'

const Header = () => {
  return (
    <div
      className='h-28 w-full'
    >
      <div className='h-1/2 w-full flex justify-center border-b-2 border-[#f5f5f5] font-mono'>
        <HeaderTitle />
      </div>
      
      <div className='h-1/2 w-full flex justify-center border-b-2 border-[#f5f5f5] font-serif'>
        <NavBar />
      </div>
    </div>
  )
}

export default Header