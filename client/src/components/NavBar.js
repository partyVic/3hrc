import React, { useState } from 'react'
import NavBarItem from './NavBarItem'

const navBarItems = [
  'Home',
  'Infomation',
  'Programs',
  'CODE OF PRACTICE & COMPLAINT FORM'
]

const NavBar = () => {
  return (
    <div className='flex h-full items-center'>

      {navBarItems.map((item) => (
        <NavBarItem
          key={item}
          title={item}
          showChevronDownIcon={item === 'Programs'}
        />
      ))}
    </div>
  )
}

export default NavBar