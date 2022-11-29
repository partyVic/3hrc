import React, { useState } from 'react'
import Bars from '../icons/bars'
import NavIconModal from './navIconModal'

const navBarItems = [
  { title: 'Home', navItems: [], navItemURL: '/' },
  { title: 'Infomation', navItems: [], navItemURL: 'info' },
  { title: 'Programs', navItems: ['Program 1', 'Program 2'], navItemURL: 'programs' },
  { title: 'Forms', navItems: ['Form 1', 'From2'], navItemURL: '' },
  { title: 'Sponsors', navItems: [], navItemURL: 'sponsors' },
]

const NavIcon = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleModalOpen = () => {
    setIsOpenModal(true)
  }

  const handleModalClose = () => {
    setIsOpenModal(false)
  }

  return (
    <div className='flex'>
      <div
        className='ml-4 my-2 cursor-pointer'
        onClick={handleModalOpen}
      >
        <Bars />
      </div>

      {isOpenModal &&
        <div className='absolute w-full' >
          <NavIconModal
            handleModalClose={handleModalClose}
          />
        </div>
      }
    </div>
  )
}

export default NavIcon