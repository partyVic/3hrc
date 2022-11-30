import React, { useState, useRef } from 'react'
import Bars from '../icons/bars'
import NavIconModal from './navIconModal'
import XMark from '../icons/x-mark'
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
    <div className='flex justify-between items-center bg-black' ref={ref}>
      <span className='ml-4 text-white'>3HCR</span>
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