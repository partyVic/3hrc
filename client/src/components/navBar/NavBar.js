import React from 'react'
import NavBarItem from './NavBarItem'

const navBarItems = [
  { title: 'Home', navItems: null },
  { title: 'Infomation', navItems: null },
  { title: 'Programs', navItems: ['Program 1', 'Program 2'] },
  { title: 'CODE OF PRACTICE & COMPLAINT FORM', navItems: null },
  { title: 'Sponsors', navItems: null },

]

const NavBar = () => {
  return (
    <div className='flex h-full items-center'>

      {navBarItems.map((item) => (
        <NavBarItem
          key={item.title}
          title={item.title}
          navItems={item.navItems}
          showChevronDownIcon={item.title === 'Programs'}
        />
      ))}
    </div>
  )
}

export default NavBar