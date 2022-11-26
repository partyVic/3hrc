import React, { useState } from 'react'
import ChevronDown from './icons/chevron-down'
import DropDownModal from './DropDownModal'

const NavBarItem = ({ title, showChevronDownIcon }) => {
    const [isShowModal, setIsShowModal] = useState(false)


    return (
        <div className='relative mr-10'>
            
            <div className='flex items-center'>
                <span
                    onMouseOver={() => setIsShowModal(true)}
                    onMouseLeave={() => setIsShowModal(false)}
                    className='text-[#4d4d54] font-normal'>
                    {title}
                </span>

                {showChevronDownIcon && <span className='mt-1'><ChevronDown /></span>}
            </div>


            {isShowModal && <div className='absolute' >
                <DropDownModal />
            </div>}
        </div>
    )
}

export default NavBarItem