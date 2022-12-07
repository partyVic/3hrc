import React, { useState, useRef } from 'react'
import Bars from '../icons/bars'
import NavIconModal from './navIconModal'
import XMark from '../icons/x-mark'
import LOGO from '../../../src/assets/images/3HCR logo.webp'
import useOutSideClick from '../../helperFunctions/useOutSideClick'


const NavIcon = () => {
  const ref = useRef()
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleModalOpen = () => {
    setIsOpenModal(true)
  }

  const handleModalClose = () => {
    setIsOpenModal(false)
  }

  useOutSideClick(ref, handleModalClose)

  return (
    <div className='flex justify-between items-center bg-[#1b2024]' ref={ref}>
      <div>
        <span className='ml-4 text-white'>3HCR Omeo</span>
        <img
          className='h-6 w-6 ml-4 inline rounded'
          src={LOGO}
          alt="logo" />
      </div>

      <div
        className='mr-4 my-2 cursor-pointer'
      >
        {!isOpenModal
          ?
          <div className='text-white' onClick={handleModalOpen}><Bars /></div>
          :
          <div className='text-white' onClick={handleModalClose}><XMark /></div>
        }
      </div>

      {isOpenModal &&
        <div className='absolute w-full top-10'>
          <NavIconModal
          />
        </div>
      }
    </div>
  )
}

export default NavIcon