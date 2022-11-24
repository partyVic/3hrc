import React from 'react'
import ChevronDown from './icons/chevron-down'

const NavBarItem = ({ title }) => {
    return (
        <div className=''>
            <div className='flex'>
                <span className='text-[#4d4d54] font-normal'>{title}</span>
                <ChevronDown />
            </div>
        </div>
    )
}

export default NavBarItem