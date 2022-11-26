import React from 'react'
import './dropDownModal.css'
import DropDownModalItems from './DropDownModalItems'

const DropDownModal = ({ navItems }) => {
  return (
    <div className='DropDownModal pt-4 w-56 h-24 rounded-b-md'>
      {navItems.map(item => (
        <div
          className={`ml-8 mt-2`}
          key={item}
        >
          <DropDownModalItems title={item} />
        </div>
      ))}
    </div>
  )
}
export default DropDownModal