import React from 'react'
import Phone from './icons/phone'
import MapPin from './icons/map-pin'
import Envelope from './icons/envelope'
import Facebook from './icons/facebook'
import Linkedin from './icons/linkedin'
import Youtube from './icons/youtube'

const Footer = () => {
  return (
    <div className='
    md:flex bg-black pb-8
    hidden
    '>

      <div className=' font-lato text-sm ml-20 mt-8 mb-8'>
        <h4 className='text-[#9ba4ac]'>CONTACT US</h4>
        <div className='mt-2'>
          <span className='text-white flex mb-2'>
            <Phone />
            <p className='ml-2'>0493 088 902</p>
          </span>
          <span className='text-white flex mb-2'>
            <MapPin />
            <p className='ml-2'>73 Sebastopol Hill Road, Omeo, Victoria 3898 Australia</p>
          </span>
          <span className='text-white flex'>
            <Envelope />
            <p className='ml-2'>oscarefem@gmail.com</p>
          </span>
        </div>
      </div>

      <div className=' font-lato text-sm ml-20 mr-20 mt-8'>
        <h4 className='text-[#9ba4ac]'>FOLLOW US</h4>
        <div className='flex mt-2'>
          <span className='text-white mr-4'>
            <a href="https://www.facebook.com/profile.php?id=100010179306405">
              <Facebook />
            </a>
          </span>
          <span className='text-white mr-4'>
            <Linkedin />
          </span>
          <span className='text-white'>
            <Youtube />
          </span>
        </div>
      </div>

      <div className=' font-lato text-sm mr-20 ml-10 mt-8'>
        <h4 className='text-[#9ba4ac]'>&copy;&nbsp;COPYRIGHT</h4>
        <div className='text-white mt-2'>
          <p className='mb-2'>3HCR High Country Radio FM 90.9 & 97.3</p>
          <p className='mb-2'>Omeo Shire Community Access Radio Inc.</p>
          <p>(OSCAR) ABN 48 876 068 071</p>
        </div>
      </div>
    </div>
  )
}

export default Footer