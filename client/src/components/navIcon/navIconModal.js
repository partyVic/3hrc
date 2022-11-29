import React from 'react'
import XMark from '../icons/x-mark'

const NavIconModal = ({ handleModalClose }) => {
    return (
        <div className='flex'>
            <div className='w-1/2'>
                <div className='h-10 bg-black'></div>
                <div className='h-96 bg-neutral-100'></div>
            </div>
            <div
                className='mt-2 ml-2 cursor-pointer'
                onClick={handleModalClose}
            >
                <XMark />
            </div>
        </div>


    )
}

export default NavIconModal