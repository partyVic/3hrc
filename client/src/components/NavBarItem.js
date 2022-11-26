import React, { useState } from 'react'
import ChevronDown from './icons/chevron-down'
import DropDownModal from './DropDownModal'
import './navBarItem.css'

const NavBarItem = ({ title, showChevronDownIcon, navItems }) => {
    const [isShowModal, setIsShowModal] = useState(false)
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseOver = () => {
        setIsShowModal(true)
        setIsHovering(true)
    }

    const handleMouseLeave = () => {
        setIsShowModal(false)
        setIsHovering(false)
    }
    return (
        <div
            className='NavBarItem relative mr-10 h-full flex items-center'
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
        >

            <div
                className='flex items-center '

            >
                <span
                    className='NavBarItem-span text-[#4d4d54] font-normal'>
                    {title}
                </span>

                {showChevronDownIcon &&
                    <span className={`mt-1 ${isHovering ? 'text-red-500' : ''}`}>
                        <ChevronDown />
                    </span>}

                {isShowModal && navItems &&
                    <div className='absolute top-12' >
                        <DropDownModal navItems={navItems} />
                    </div>}
            </div>



        </div>
    )
}

export default NavBarItem