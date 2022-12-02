import React from 'react'
import NavBarItem from './NavBarItem'
import NAVBAR_ITEMS from '../../dataBase/navBarItems'

const NavBar = () => {
  return (
    <div className='
    lg:w-3/4
    flex h-full w-5/6 items-center
    '>

      {NAVBAR_ITEMS.map((item) => (
        <NavBarItem
          key={item.title}
          title={item.title}
          navItems={item.navItems}
          isNavigate={item.navItems.length > 0 ? false : true}
          navItemURL={item.navItemURL}
          showDropDownModal={item.navItems.length > 0 ? true : false}
        />
      ))}
    </div>
  )
}

export default NavBar