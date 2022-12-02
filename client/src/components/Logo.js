import React from 'react'
import LOGO from '../../src/assets/images/3HCR logo.webp'

const Logo = () => {
    return (
        <img
            className='h-8 ml-4 inline rounded-full'
            src={LOGO}
            alt="logo" />
    )
}

export default Logo