import React from 'react'
import './navBarDropDownModal.css'

const NavBarDropDownModal = ({ navItems }) => {

  return (
    <div className='NavBarDropDownModal pt-4 w-56 h-24 rounded-b-md'>
      {navItems.map(item => (
        <div
          className={`ml-8 mt-2 hover:text-red-500 hover:underline hover:underline-offset-2 hover:decoration-solid hover:cursor-pointer`}
          key={item}
        >
          {item}
        </div>
      ))}
    </div>
  )
}
export default NavBarDropDownModal