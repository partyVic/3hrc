import React from 'react'
import NavBar from './navBar/NavBar'
import NavHeaderTitle from './navHeaderTitle/HeaderTitle'
import NavIcon from './navIcon/NavIcon'

const Header = () => {
  return (
    <>
      <div
        className='
          md:h-28 md:w-full md:block
          hidden
        '
      >
        <div className='h-1/2 w-full flex justify-center border-b-2 border-[#f5f5f5] font-mono'>
          <NavHeaderTitle />
        </div>

        <div className='h-1/2 w-full flex justify-center border-b-2 border-[#f5f5f5] font-serif'>
          <NavBar />
        </div>
      </div>


      <div className='
          md:hidden
          h-10 w-full block fixed bg-white
      '
      >
        <NavIcon />
      </div>
    </>

  )
}

export default Header