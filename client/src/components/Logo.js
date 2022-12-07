import React from 'react'
import LOGO from '../../src/assets/images/3HCR logo.webp'

const Logo = () => {
    return (
        <img
            className='w-10 h-10 ml-2 inline rounded'
            src={LOGO}
            alt="logo" />
    )
}

export default Logo