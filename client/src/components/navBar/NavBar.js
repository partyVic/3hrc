import React from 'react'
import NavBarItem from './NavBarItem'

const navBarItems = [
  { title: 'Home', navItems: [] },
  { title: 'Infomation', navItems: [] },
  { title: 'Programs', navItems: ['Program 1', 'Program 2'] },
  { title: 'CODE OF PRACTICE & COMPLAINT FORM', navItems: ['Form 1', 'From2'] },
  { title: 'Sponsors', navItems: [] },
]

const NavBar = () => {
  return (
    <div className='flex h-full items-center'>

      {navBarItems.map((item) => (
        <NavBarItem
          key={item.title}
          title={item.title}
          navItems={item.navItems}
          showDropDownModal={item.navItems.length ? true : false}
        />
      ))}
    </div>
  )
}

export default NavBar