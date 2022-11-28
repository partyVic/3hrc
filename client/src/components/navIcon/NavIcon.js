import React, { useState } from 'react'
import Bars from '../icons/bars'
import NavIconModal from './navIconModal'
import XMark from '../icons/x-mark'

const navBarItems = [
  { title: 'Home', navItems: [], navItemURL: '/' },
  { title: 'Infomation', navItems: [], navItemURL: 'info' },
  { title: 'Programs', navItems: ['Program 1', 'Program 2'], navItemURL: 'programs' },
  { title: 'Forms', navItems: ['Form 1', 'From2'], navItemURL: '' },
  { title: 'Sponsors', navItems: [], navItemURL: 'sponsors' },
]

const NavIcon = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <div className='flex'>
      <div
        className='ml-4 cursor-pointer'
        onClick={() => setIsOpenModal(true)}
      >
        <Bars />
      </div>

      {isOpenModal &&
        <div className='absolute w-full' >
          <div>
            <NavIconModal />
          </div>
          <span>
            <XMark />
          </span>
        </div>
      }
    </div>
  )
}

export default NavIcon