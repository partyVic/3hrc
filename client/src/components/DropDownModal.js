import React, { useState } from 'react'
import './dropDownModal.css'

const DropDownModal = ({ navItems }) => {
  const [isHovering, setIsHovering] = useState(false)

  console.log(navItems)

  return (
    <div className='DropDownModal pt-4 w-56 h-24 rounded-b-md'>
      {navItems.map(item => (
        <div
          className={`ml-8 mt-2`}
          key={item}
          onMouseOver={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {
            <span className={`${isHovering ? 'bg-slate-500' : ''}`}>{item}</span>
          }
        </div>
      ))}
    </div>
  )
}
export default DropDownModal