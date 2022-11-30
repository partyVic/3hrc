import React, { useRef } from 'react'
import XMark from '../icons/x-mark'
import useOutSideClick from '../../helperFunctions/useOutSideClick'

const NavIconModal = ({ handleModalClose }) => {
    const ref = useRef()

    // Call hook passing in the ref and a function to call on outside click
    useOutSideClick(ref, handleModalClose)

    return (
        <div className='flex' >
            <div className='w-3/4' ref={ref}>
                <div className='h-10 bg-black'></div>
                <div className='h-96 bg-neutral-100'></div>
            </div>
            <div
                className='mt-2 ml-2 h-10 cursor-pointer'
                onClick={handleModalClose}
            >
                <XMark />
            </div>
        </div>


    )
}

export default NavIconModal