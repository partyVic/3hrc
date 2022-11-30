import React from 'react'
import NavBarItem from './NavBarItem'
import navBarItems from '../../dataBase/navBarItems'

const NavBar = () => {
  return (
    <div className='
    lg:w-3/4
    flex h-full w-5/6 items-center
    '>

      {navBarItems.map((item) => (
        <NavBarItem
          key={item.title}
          title={item.title}
          navItems={item.navItems}
          showDropDownModal={item.navItems.length > 0 ? true : false}
        />
      ))}
    </div>
  )
}

export default NavBar