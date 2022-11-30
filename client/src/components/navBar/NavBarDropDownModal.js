import React from 'react'
import './navBarDropDownModal.css'

const NavBarDropDownModal = ({ navItems }) => {

  return (
    <div className='NavBarDropDownModal mt-2 pt-4 w-56 h-48 bg-white rounded-b-md'>
      {navItems.map(item => (
        <div
          className={`ml-8 mt-2 hover:underline hover:underline-offset-2 hover:decoration-indigo-500 hover:cursor-pointer`}
          key={item}
        >
          {item}
        </div>
      ))}
    </div>
  )
}
export default NavBarDropDownModal